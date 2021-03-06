package main

import (
	"net/http"
)

func init() {
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("src/assets"))))
	http.Handle("/src/", http.StripPrefix("/src/", http.FileServer(http.Dir("src"))))
	http.Handle("/assets/src/", http.StripPrefix("/assets/src/", http.FileServer(http.Dir("src"))))
	http.Handle("/vendor/", http.StripPrefix("/vendor/", http.FileServer(http.Dir("vendor"))))
	http.Handle("/fonts/", http.StripPrefix("/fonts/", http.FileServer(http.Dir("src/assets/vendor"))))
}
