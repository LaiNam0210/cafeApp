db.customer.drop();

var customers = [{"name":"Phạm Nhật Vượng","description":"Chủ tịch HĐQT VIC","address":"Hà Nội-Tập đoàn VinGroup","phone":"0985249668"},{"name":"Đoàn Nguyên Đức","description":"Chủ tịch HĐQT HAG","address":"Gia Lai-Công ty Hoàng Anh Gia Lai","phone":"0918327224"},{"name":"Trần Đình Long","description":"Chủ tịch HĐQT HPG","address":"Hà Nội-Tập đoàn Hòa Phát","phone":"0926361343"},{"name":"Phạm Thu Hương","description":"Phó Chủ tịch HĐQT VIC; Vợ ông Phạm Nhật Vượng_Chủ tịch HĐQT VIC","address":"Hà Nội-Tập đoàn VinGroup","phone":"0978638841"},{"name":"Phạm Thúy Hằng","description":"Phó Chủ tịch HĐQT VIC; Em vợ ông Phạm Nhật Vượng_Chủ tịch HĐQT VIC","address":"Hà Nội-Tập đoàn VinGroup","phone":"0943818294"},{"name":"Nguyễn Hoàng Yến","description":"Ủy viên HĐQT MSN; Vợ ông Nguyễn Đăng Quang_Tổng giám đốc MSN - Chủ tịch HĐQT MSN","address":"TP HCM-Tập đoàn Ma San","phone":"0950479269"},{"name":"Lê Phước Vũ","description":"Chủ tịch HĐQT HSG","address":"TP HCM-Tập đoàn Hoa Sen","phone":"0971605846"},{"name":"Hà Văn Thắm","description":"Chủ tịch HĐQT OCH - Chủ tịch HĐQT OGC","address":"-Tập đoàn Đại Dương","phone":"0976626359"},{"name":"Nguyễn Văn Đạt","description":"Chủ tịch HĐQT PDR - Tổng giám đốc PDR","address":"TP HCM-Công ty Phát triển Bất động sản Phát Đạt","phone":"0998397851"},{"name":"Hồ Hùng Anh","description":"Phó Chủ tịch HĐQT MSN","address":"Hà Nội-Tập đoàn Ma San","phone":"0932803864"},{"name":"Vũ Thị Hiền","description":"Vợ ông Trần Đình Long_Chủ tịch HĐQT HPG","address":"-Tập đoàn Hòa Phát","phone":"0964325426"},{"name":"Đặng Thành Tâm","description":"Chủ tịch HĐQT KBC - Chủ tịch HĐQT SGT","address":"TP HCM-Ngân hàng Nam Việt Công ty Đầu tư và Công nghiệp Tân Tạo Công ty Công nghệ Viễn thông Sài Gòn Tổng công ty Phát triển Đô thị Kinh Bắc","phone":"0963116153"},{"name":"Dương Ngọc Minh","description":"Chủ tịch HĐQT VTF - Tổng giám đốc HVG - Chủ tịch HĐQT HVG - Phó Chủ tịch HĐQT AGF","address":"TP HCM-Công ty Hùng Vương Công ty Thức ăn Chăn nuôi Việt Thắng","phone":"0996356235"},{"name":"Trầm Trọng Ngân","description":"Con ông Trầm Bê_Phó Chủ tịch HĐQT STB - Ủy viên HĐQT BCI","address":"-Ngân hàng Sài Gòn Thương Tín","phone":"0969197159"},{"name":"Trương Gia Bình","description":"Chủ tịch HĐQT FPT","address":"Hà Nội-Công ty FPT","phone":"0917441252"},{"name":"Trần Kim Thành","description":"Chủ tịch HĐQT KDC - Phó Chủ tịch HĐQT TLG","address":"TP HCM-Công ty Kinh Đô Tập đoàn Thiên Long","phone":"0929457270"},{"name":"Trần Lệ Nguyên","description":"Ủy viên HĐQT TLG - Tổng giám đốc KDC - Phó Chủ tịch HĐQT KDC; Em ông Trần Kim Thành_Chủ tịch HĐQT KDC - Phó Chủ tịch HĐQT TLG","address":"TP HCM-Tập đoàn Thiên Long Công ty Kinh Đô","phone":"0938283342"},{"name":"Nguyễn Duy Hưng","description":"Chủ tịch HĐQT PAN - Chủ tịch HĐQT SSI","address":"Hà Nội-CTCK Sài Gòn Công ty Thực phẩm Sao Ta Công ty Xuyên Thái Bình Công ty Viglacera Đông Anh","phone":"0920416346"},{"name":"Trương Thị Lệ Khanh","description":"Chủ tịch HĐQT VHC - Tổng giám đốc VHC","address":"TP HCM-Công ty Vĩnh Hoàn","phone":"0922011230"},{"name":"Madhur Maini","description":"Ủy viên HĐQT MSN","address":"TP HCM-Tập đoàn Ma San","phone":"0923443313"},{"name":"Đỗ Hữu Hạ","description":"Chủ tịch HĐQT HHS","address":"Hà Nội-Công ty Đầu tư - Dịch vụ Hoàng Huy","phone":"0996080373"},{"name":"Bùi Quang Ngọc","description":"Phó Chủ tịch HĐQT FPT - Tổng giám đốc FPT","address":"Hà Nội-Công ty FPT","phone":"0914929870"},{"name":"Đặng Phước Thành","description":"Chủ tịch HĐQT VNS","address":"TP HCM-Công ty Ánh Dương Việt Nam","phone":"0993347438"},{"name":"Nguyễn Tuấn Hải","description":"Chủ tịch HĐQT ALP","address":"Hà Nội-Công ty Đầu tư Alphanam","phone":"0987609514"},{"name":"Trần Tuấn Dương","description":"Tổng giám đốc HPG - Phó Chủ tịch HĐQT HPG","address":"Hà Nội-Tập đoàn Hòa Phát","phone":"0913683558"},{"name":"Nguyễn Mạnh Tuấn","description":"Phó Chủ tịch HĐQT HPG","address":"Hà Nội-Tập đoàn Hòa Phát","phone":"0908380265"},{"name":"Trần Hùng Huy","description":"Chủ tịch HĐQT ACB","address":"TP HCM-Ngân hàng Á Châu","phone":"0916976438"},{"name":"Nguyễn Ngọc Hải","description":"Chồng bà Nguyễn Thị Mai Thanh_Chủ tịch HĐQT REE - Tổng giám đốc REE","address":"-Công ty Cơ điện lạnh","phone":"0919313890"},{"name":"Chu Thị Bình","description":"Phó TGĐ MPC - Ủy viên HĐQT MPC; Vợ ông Lê Văn Quang_Tổng giám đốc MPC - Chủ tịch HĐQT MPC","address":"Cà Mau-Tập đoàn Thủy hải sản Minh Phú","phone":"0990370919"},{"name":"Trầm Khải Hòa","description":"Ủy viên HĐQT STB; Con ông Trầm Bê_Phó Chủ tịch HĐQT STB - Ủy viên HĐQT BCI","address":"-Ngân hàng Sài Gòn Thương Tín","phone":"0946522472"},{"name":"Nguyễn Thị Như Loan","description":"Chủ tịch HĐQT QCG - Tổng giám đốc QCG","address":"Gia Lai-Công ty Quốc Cường Gia Lai","phone":"0994673642"},{"name":"Lê Văn Quang","description":"Tổng giám đốc MPC - Chủ tịch HĐQT MPC","address":"TP HCM-Tập đoàn Thủy hải sản Minh Phú","phone":"0961154662"},{"name":"Đặng Thị Hoàng Yến","description":"Chủ tịch HĐQT ITA; Chị ông Đặng Thành Tâm_Chủ tịch HĐQT KBC - Chủ tịch HĐQT SGT","address":"TP HCM-Công ty Đầu tư và Công nghiệp Tân Tạo","phone":"0951251382"},{"name":"Doãn Gia Cường","description":"Phó Chủ tịch HĐQT HPG","address":"Hà Nội-Tập đoàn Hòa Phát","phone":"0969666634"},{"name":"Nguyễn Ngọc Quang","description":"Cổ đông lớn HPG","address":"Hà Nội-Tập đoàn Hòa Phát","phone":"0955468888"},{"name":"Nguyễn Thị Diệu Hiền","description":"Vợ ông Nguyễn Văn Đạt_Chủ tịch HĐQT PDR - Tổng giám đốc PDR","address":"-Công ty Phát triển Bất động sản Phát Đạt","phone":"0983546762"},{"name":"Mai Kiều Liên","description":"Tổng giám đốc VNM - Chủ tịch HĐQT VNM","address":"TP HCM-Công ty Sữa Việt Nam","phone":"0980289466"},{"name":"Vương Ngọc Xiềm","description":"Ủy viên HĐQT KDC - Phó TGĐ KDC; Em ông Trần Kim Thành_Chủ tịch HĐQT KDC - Phó Chủ tịch HĐQT TLG","address":"TP HCM-Công ty Kinh Đô","phone":"0915056473"},{"name":"Nguyễn Thị Mai Thanh","description":"Chủ tịch HĐQT REE - Tổng giám đốc REE; Mẹ ông Nguyễn Ngọc Thái Bình_Ủy viên HĐQT REE","address":"TP HCM-Công ty Cơ điện lạnh","phone":"0982566483"},{"name":"Đỗ Văn Bình","description":"Phó Chủ tịch HĐQT SJS","address":"Hà Nội-Công ty Đầu tư Phát triển Đô thị và Khu công nghiệp Sông Đà","phone":"0912052964"},{"name":"Nguyễn Hồng Nam","description":"Người CBTT SSI - Ủy viên HĐQT SSI - Phó TGĐ SSI; Em ông Nguyễn Duy Hưng_Chủ tịch HĐQT PAN - Chủ tịch HĐQT SSI","address":"TP HCM-CTCK Sài Gòn","phone":"0924522202"},{"name":"Đặng Thành Duy","description":"Ủy viên HĐQT CLS - Phó TGĐ VNS; Con ông Đặng Phước Thành_Chủ tịch HĐQT VNS","address":"TP HCM-Công ty Ánh Dương Việt Nam","phone":"0959084786"},{"name":"Hoàng Thị Xuân Hương","description":"Vợ ông Lê Phước Vũ_Chủ tịch HĐQT HSG","address":"-Tập đoàn Hoa Sen","phone":"0932014198"},{"name":"Phạm Hồng Linh","description":"Chị bà Phạm Thúy Hằng_Phó Chủ tịch HĐQT VIC","address":"Hà Nội-Tập đoàn VinGroup","phone":"0909768351"},{"name":"Phan Huy Khang","description":"Phó Chủ tịch HĐQT STB - Tổng giám đốc STB","address":"-Ngân hàng Sài Gòn Thương Tín","phone":"0964889985"},{"name":"Nguyễn Thanh Nghĩa","description":"Tổng giám đốc DTL - Chủ tịch HĐQT DTL - Phó Chủ tịch HĐQT DHC","address":"TP HCM-Công ty Thủy sản Mekong Công ty Đông Hải Bến Tre Công ty Đại Thiên Lộc","phone":"0926695243"},{"name":"Trần Mộng Hùng","description":"Ủy viên HĐQT ACB; Bố ông Trần Hùng Huy_Chủ tịch HĐQT ACB","address":"TP HCM-Ngân hàng Á Châu","phone":"0977188769"},{"name":"Doãn Tới","description":"Chủ tịch HĐQT ANV - Tổng giám đốc ANV","address":"An Giang-Công ty Nam Việt","phone":"0943342347"},{"name":"Nguyễn Xuân Quang","description":"Chủ tịch HĐQT NLG - Tổng giám đốc NLG","address":"TP HCM-Công ty Đầu tư Nam Long","phone":"0914872932"},{"name":"Nguyễn Quốc Thành","description":"Chồng bà Phạm Thúy Hằng_Phó Chủ tịch HĐQT VIC","address":"-Tập đoàn VinGroup","phone":"0996356064"},{"name":"Đỗ Hữu Hậu","description":"Ủy viên HĐQT HHS; Con ông Đỗ Hữu Hạ_Chủ tịch HĐQT HHS","address":"Hải Phòng-Công ty Đầu tư - Dịch vụ Hoàng Huy","phone":"0931184671"},{"name":"Cao Thị Ngọc Dung","description":"Chủ tịch HĐQT PNJ - Tổng giám đốc PNJ","address":"TP HCM-Công ty Vàng bạc đá quý Phú Nhuận","phone":"0961243898"},{"name":"Đặng Hồng Anh","description":"Tổng giám đốc SCR - Chủ tịch HĐQT SCR","address":"TP HCM-Ngân hàng Sài Gòn Thương Tín Công ty Địa ốc Sài Gòn Thương Tín","phone":"0954248076"},{"name":"Lê Văn Hướng","description":"Chủ tịch HĐQT JVC - Tổng giám đốc JVC","address":"Hà Nội-Công ty Thiết bị Y tế Việt Nhật","phone":"0935503418"},{"name":"Phạm Văn Khương","description":"Phó TGĐ VIC","address":"Hà Nội-Tập đoàn VinGroup","phone":"0933924743"},{"name":"Đặng Thị Hoàng Phượng","description":"Chủ tịch HĐQT SQC - Tổng giám đốc SQC; Em ông Đặng Thành Tâm_Chủ tịch HĐQT KBC - Chủ tịch HĐQT SGT","address":"TP HCM-Tổng công ty Phát triển Đô thị Kinh Bắc","phone":"0912435712"},{"name":"Trương Thị Thanh Thanh","description":"Chị ông Trương Gia Bình_Chủ tịch HĐQT FPT","address":"TP HCM-Công ty FPT","phone":"0915571664"},{"name":"Nguyễn Trọng Thông","description":"Tổng giám đốc HDG - Người CBTT HDG - Chủ tịch HĐQT HDG","address":"-Tập đoàn Hà Đô","phone":"0987582191"},{"name":"Đinh Xuân Bồng","description":"Phó TGĐ BBS - Ủy viên HĐQT BBS","address":"Nam Định-Công ty VICEM Bao bì Bút Sơn Công ty FPT","phone":"0976137388"},{"name":"Vương Quốc Trụ","description":"Em ông Trần Kim Thành_Chủ tịch HĐQT KDC - Phó Chủ tịch HĐQT TLG","address":"-Công ty Kinh Đô","phone":"0948987227"},{"name":"Đỗ Quang Hiển","description":"Chủ tịch HĐQT SHS - Chủ tịch HĐQT SHB","address":"Hà Nội-Ngân hàng Sài Gòn - Hà Nội CTCK Sài Gòn Hà Nội","phone":"0952657833"},{"name":"Nguyễn Đức Thụy","description":"Chủ tịch HĐQT VIX","address":"Hà Nội-CTCK Xuân Thành","phone":"0991356222"},{"name":"Nguyễn Như So","description":"Chủ tịch HĐQT DBC - Tổng giám đốc DBC","address":"Bắc Ninh-Tập đoàn Dabaco Việt Nam","phone":"0944174875"},{"name":"Võ Thị Thanh","description":"Chủ tịch HĐQT GTT - Tổng giám đốc GTT - Người CBTT GTT","address":"Phú Yên-Công ty Thuận Thảo","phone":"0996638461"},{"name":"Trần Minh Hoàng","description":"Em ông Trần Hùng Huy_Chủ tịch HĐQT ACB","address":"TP HCM-Ngân hàng Á Châu","phone":"0959333552"},{"name":"Nguyễn Thiều Nam","description":"Phó TGĐ MSN - Ủy viên HĐQT MSN","address":"TP HCM-Tập đoàn Ma San","phone":"0936836874"}];

var number = customers.length;
for (var i = 0; i < number; i++) {
  db.customer.insert(customers[i]);
}


db.user.drop();

var Users = [{"name":"Bill Gates","phone":"0990241153"},{"name":"Carlos Slim Helu & famil","phone":"0996885655"},{"name":"Amancio Ortega","phone":"0977217870"},{"name":"Warren Buffett","phone":"0944373303"},{"name":"Larry Elliso","phone":"0912961165"},{"name":"Charles Koch","phone":"0960380841"},{"name":"David Koch","phone":"0966514756"},{"name":"Sheldon Adelso","phone":"0968190857"},{"name":"Christy Walton & famil","phone":"0970956860"},{"name":"Jim Walton","phone":"0975358985"},{"name":"Liliane Bettencourt & family","phone":"0916673134"},{"name":"Stefan Persson","phone":"0949124486"},{"name":"Alice Walton","phone":"0933332787"},{"name":"S. Robson Walton","phone":"0952575755"},{"name":"Bernard Arnault & family","phone":"0976338488"}];

number = Users.length;
for(var i=0;i<number;i++){
  Users[i]._id = i;
  db.user.insert(Users[i]);
}