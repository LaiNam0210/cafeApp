package main

import (
	// "encoding/json"
	"flag"
	"fmt"
	// "io/ioutil"
	"log"
	"net/http"
	"time"

	ctx "github.com/gorilla/context"
	sss "github.com/gorilla/sessions"
	mgo "labix.org/v2/mgo"
	wqr "server/query"

	"server/user"
)

const (
	kIndexHtml = "index.html"
	kSSName    = "ssdef"
)

var (
	flPort   = flag.String("port", "80", "port")
	flDir    = flag.String("dir", "public", "resource dir")
	flDbName = flag.String("dbname", "cafe", "database name")

	db     *mgo.Database
	dbname string
	store  = sss.NewCookieStore([]byte("this-is-secret-string"))
)

func setModifiedDate(db *mgo.Database, action string, id int64, doc wqr.Doc) bool {

	time := time.Now().Unix() * 1000

	if action == wqr.Create {
		doc["dateCreated"] = time
	}
	doc["dateModified"] = time

	return true
}

func connectDatabase(connectionString, databaseName string) *mgo.Database {
	session, err := mgo.Dial(connectionString)
	if err != nil {
		panic("Error connecting database: " + connectionString)
	}

	dbname = databaseName
	db = session.DB(dbname)
	return db
}

func defineModels() {
	wqr.New(db, "user", "/api/user").
		BeforeCreate(setModifiedDate).
		BeforeUpdate(setModifiedDate).
		EnableSearch("name,string").
		RegisterRoutes(nil)

	wqr.New(db, "item", "/api/item").
		DefaultPerPage(40).
		BeforeCreate(setModifiedDate).
		BeforeUpdate(setModifiedDate).
		EnableSearch("catid,number").
		// EnableSearch("title", "pricefinal,number", "pricesell,number", "catid,number").
		RegisterRoutes(nil)

	wqr.New(db, "category", "/api/category").
		BeforeCreate(setModifiedDate).
		BeforeUpdate(setModifiedDate).
		EnableSearch("catid,number").
		RegisterRoutes(nil)

	wqr.New(db, "plus", "/api/plus").
		BeforeCreate(setModifiedDate).
		BeforeUpdate(setModifiedDate).
		RegisterRoutes(nil)

	wqr.New(db, "customer", "/api/customer").
		BeforeCreate(setModifiedDate).
		BeforeUpdate(setModifiedDate).
		EnableSearch("name,string").
		RegisterRoutes(nil)

	wqr.New(db, "bill", "/api/bill").
		BeforeCreate(setModifiedDate).
		BeforeUpdate(setModifiedDate).
		RegisterRoutes(nil)

}

func linkPackages() {
	user.SSName = kSSName
	user.Store = store
	user.UserDB = db.C("user")
}

func main() {
	flag.Parse()

	rootDir := *flDir
	if rootDir[len(rootDir)-1] != '/' {
		rootDir += "/"
	}

	connectDatabase("127.0.0.1", *flDbName)
	linkPackages()
	defineModels()

	fileServer := http.FileServer(http.Dir(rootDir))
	http.Handle("/", fileServer)
	http.HandleFunc("/login", Login)
	log.Printf("Start server, port=%v, dir=%v", *flPort, rootDir)
	http.ListenAndServe(":"+*flPort, nil)
	http.ListenAndServe(":"+*flPort, ctx.ClearHandler(http.DefaultServeMux))
}

type t struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func Login(w http.ResponseWriter, r *http.Request) {
	// info := r.PostForm
	r.ParseForm()
	username := r.FormValue("username")
	fmt.Println(username)
}
