db.category.drop();
db.category.save([{
  name: 'Tất Cả',
  catid: 0
},
{
  name: 'SỮA CHUA',
  catid: 2
},
{
  name: 'KEM',
  catid: 3
},
{
  name: 'NƯỚC TRÁI CÂY',
  catid: 4
},{
  name: 'CAFE',
  catid: 5
},{
  name: 'TRÀ SỮA',
  catid: 1
}]);

db.plus.drop();
var pluss = [{name: "Trân châu", price: 6000},
{name: "Hạt cafe", price: 6000},
{name: "Hạt lục trà", price: 6000},
{name: "Hạt Yaourt", price: 6000},
{name: "Thạch thủy tinh", price: 7000},
{name: "Thạch trái cây", price: 7000},
{name: "Thạch dâu", price: 7000},
{name: "Thạch nho", price: 7000},
{name: "Thạch cam", price: 7000},
{name: "Thạch vải", price: 7000},
{name: "Thạch táo xanh", price: 7000},
{name: "Flan trứng", price: 9000},
{name: "Flan khoai môn", price: 9000}];

for(var i=0;i<pluss.length;i++){
  pluss[i]._id = i;
  db.plus.insert(pluss[i]);
}
