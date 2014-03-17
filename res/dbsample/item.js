db.item.drop();
var items = [{
  name: "Sữa chua dâu",
  price: 25000,
  catid: 2
}, {
  name: "Sữa chua bạc hà",
  price: 25000,
  catid: 2
}, {
  name: "Sữa chua xí muội",
  price: 25000,
  catid: 2
}, {
  name: "Sữa chua nho",
  price: 25000,
  catid: 2
}, {
  name: "Sữa chua trái cây",
  price: 25000,
  catid: 2
}, {
  name: "Kem tuyết Kiwi",
  price: 25000,
  catid: 3
}, {
  name: "Kem tuyết dâu",
  price: 25000,
  catid: 3
}, {
  name: "Kem tuyết táo",
  price: 25000,
  catid: 3
}, {
  name: "Kem tuyết nho",
  price: 25000,
  catid: 3
}, {
  name: "Kem tuyết Cafe",
  price: 25000,
  catid: 3
}, {
  name: "Kem Vani",
  price: 30000,
  catid: 3
}, {
  name: "Kem sô cô la",
  price: 30000,
  catid: 3
}, {
  name: "Kem sầu riêng",
  price: 30000,
  catid: 3
}, {
  name: "Kem dâu",
  price: 30000,
  catid: 3
}, {
  name: "Kem thuyền",
  price: 45000,
  catid: 3
}, {
  name: "Kem Pump",
  price: 40000,
  catid: 3
}, {
  name: "Nước cà chua",
  price: 25000,
  catid: 4
}, {
  name: "Nước chanh dây",
  price: 25000,
  catid: 4
}, {
  name: "Nước ổi",
  price: 25000,
  catid: 4
}, {
  name: "Nước dứa (thơm)",
  price: 25000,
  catid: 4
}, {
  name: "Nước dưa hấu",
  price: 25000,
  catid: 4
}, {
  name: "Nước cam vắt",
  price: 25000,
  catid: 4
}, {
  name: "Nước cà rốt",
  price: 25000,
  catid: 4
}, {
  name: "Nước chanh tươi",
  price: 25000,
  catid: 4
}, {
  name: "Cafe nóng",
  price: 21000,
  catid: 5
}, {
  name: "Cafe đá",
  price: 21000,
  catid: 5
}, {
  name: "Cafe sữa nóng",
  price: 24000,
  catid: 5
}, {
  name: "Cafe sữa đá",
  price: 24000,
  catid: 5
}, {
  name: "Trà sữa Kiwi",
  price: 21000,
  catid: 1
}, {
  name: "Trà sữa vị cam",
  price: 21000,
  catid: 1
}, {
  name: "Trà sữa vị xoài",
  price: 21000,
  catid: 1
}, {
  name: "Trà sữa dưa gang",
  price: 21000,
  catid: 1
}, {
  name: "Trà sữa bạc hà",
  price: 21000,
  catid: 1
}, {
  name: "Trà sữa mật ong",
  price: 21000,
  catid: 1
}, {
  name: "Trà sữa Sô cô la",
  price: 21000,
  catid: 1
}, {
  name: "Trà sữa xí muội",
  price: 21000,
  catid: 1
}, {
  name: "Trà sữa chanh dây",
  price: 21000,
  catid: 1
}];

for (var i = 1; i < items.length; i++) {
  items[i]._id = i;
  db.item.insert(items[i]);
}
