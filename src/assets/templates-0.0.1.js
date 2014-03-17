angular.module('templates', ['category/category.tpl.html', 'category/category_left.tpl.html', 'category/category_right.tpl.html', 'com/footernav.tpl.html', 'com/topnav.tpl.html', 'home/home.tpl.html', 'modal/currentbill.tpl.html', 'modal/exportbill.tpl.html', 'product/product.tpl.html', 'product/product_left.tpl.html', 'product/product_right.tpl.html']);

angular.module("category/category.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("category/category.tpl.html",
    "<div class=\"category container\">\n" +
    "  <div clas=\"row\">\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <div class=\"category-left container\" ng-include=\"'category/category_left.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <div class=\"category-right container\" ng-include=\"'category/category_right.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("category/category_left.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("category/category_left.tpl.html",
    "<div class=\"row\">\n" +
    "  <span class=\"col-md-10 text-center\">Categories</span>\n" +
    "  <span class=\"col-md-2 btn btn-sm btn-success\">ADD <i class=\"glyphicon glyphicon-plus\"></i>\n" +
    "  </span>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "  <table class=\"table table-striped\">\n" +
    "    <tr ng-repeat=\"cat in Categories\">\n" +
    "      <td class=\"col-md-8\">{{cat.name}}</td>\n" +
    "      <td><button class=\"btn btn-warning full-width\">Edit</button></td>\n" +
    "      <td><button class=\"btn btn-danger full-width\">Remove</button></td>\n" +
    "    </tr>\n" +
    "  </table>\n" +
    "</div>\n" +
    "");
}]);

angular.module("category/category_right.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("category/category_right.tpl.html",
    "test right\n" +
    "");
}]);

angular.module("com/footernav.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("com/footernav.tpl.html",
    "<div class=\"pull-right\" footerNav>\n" +
    "  <div class=\"btn btn-warning btn-md form-inline navbar-btn\" ng-click=\"delivery()\">\n" +
    "    <span class=\"glyphicon glyphicon-send \"></span>\n" +
    "    Giao Hàng\n" +
    "  </div>\n" +
    "  <div class=\"btn btn-warning btn-md form-inline navbar-btn\" ng-click=\"payment()\">\n" +
    "    <span class=\"glyphicon glyphicon-shopping-cart \"></span>\n" +
    "    Thanh Toán\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("com/topnav.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("com/topnav.tpl.html",
    "<header class=\"navbar navbar-default cm-navbar\">\n" +
    "  <div class=\"container\">\n" +
    "    <ul class=\"nav navbar-nav\">\n" +
    "      <li class=\"dropdown\">\n" +
    "        <a class=\"dropdown-toggle\" href=\"#\">\n" +
    "          <span class=\"glyphicon glyphicon-th-list\"></span>\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "          <li><a ui-sref=\"home\">Blank Project</a>\n" +
    "          </li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"/login\">Login</a>\n" +
    "          </li>\n" +
    "          <li><a href=\"/register\">Register</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "\n" +
    "      <li class=\"{{isActive('packages')}}\">\n" +
    "        <a ui-sref=\"home\">\n" +
    "          <span class=\"glyphicon glyphicon-home\"></span>\n" +
    "          <span>Home</span>\n" +
    "        </a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <ul class=\"nav navbar-nav\" ui-view=\"toolbar\"></ul>\n" +
    "    <ul class=\"nav navbar-nav pull-right\" ui-view=\"toolbar-right\">\n" +
    "      <button type=\"button\" class=\"btn btn-warning navbar-btn btn-md form-inline cafebtn\">\n" +
    "        <span class=\"glyphicon glyphicon-cog\"></span>\n" +
    "      </button>\n" +
    "      <button type=\"button\" class=\"btn btn-warning navbar-btn btn-md form-inline cafebtn\">\n" +
    "        <span class=\"glyphicon glyphicon-refresh\"></span>\n" +
    "      </button>\n" +
    "      <button type=\"button\" ng-click=\"turnOff()\" class=\"btn btn-warning navbar-btn btn-md form-inline cafebtn\">\n" +
    "        <span class=\"glyphicon glyphicon-off\"></span>\n" +
    "      </button>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</header>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"home flex flex-row\">\n" +
    "  <div class=\"cafe-menu col-md-9 flex flex-col col-sm-10 col-xm-9\">\n" +
    "    <div class=\"cafe-category flex-fixed flex-row\">\n" +
    "      <div class=\"citem\" ng-model=\"item\" ng-repeat=\"item in categories.data | limitTo:9\" ng-click=\"clickCategory(item)\">\n" +
    "        <div class=\"btn btn-primary \">\n" +
    "          {{item.name}}\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"citem search flex\">\n" +
    "        <div class=\"btn btn-primary\">\n" +
    "          <span class=\"glyphicon glyphicon-search\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"cafe-item-list flex scroll-y\">\n" +
    "      <div class=\"item\" ng-repeat=\"item in items.data\" ng-click=\"addItem(item)\">\n" +
    "        <div class=\"btn btn-success\">\n" +
    "          <div class=\"imgcontainer col-md-5 flex flex-col\">\n" +
    "            <img src=\"../assets/images/cofe.jpg\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "          </div>\n" +
    "          <div class=\"imgcontainer col-md-7 flex flex-col\">\n" +
    "            <div class=\"itemname\">\n" +
    "              {{item.name}}\n" +
    "            </div>\n" +
    "            <div class=\"itemprice\">\n" +
    "              {{item.price}}\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"cafe-sidebar col-md-3 col-sm-2 col-xm-3\">\n" +
    "    <tabset justified=\"true\">\n" +
    "      <tab>\n" +
    "        <tab-heading>\n" +
    "          <i class=\"glyphicon glyphicon-info-sign\"></i>\n" +
    "        </tab-heading>\n" +
    "        <div current-bill></div>\n" +
    "      </tab>\n" +
    "      <tab>\n" +
    "        <tab-heading>\n" +
    "          <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "        </tab-heading>\n" +
    "        <div export-bill>\n" +
    "        </div>\n" +
    "      </tab>\n" +
    "      <tab>\n" +
    "        <tab-heading>\n" +
    "          <i class=\"glyphicon glyphicon-pencil\"></i>\n" +
    "        </tab-heading>\n" +
    "      </tab>\n" +
    "      <tab>\n" +
    "        <tab-heading>\n" +
    "          <i class=\"glyphicon glyphicon-pencil\"></i>\n" +
    "        </tab-heading>\n" +
    "        edit2\n" +
    "      </tab>\n" +
    "    </tabset>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modal/currentbill.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modal/currentbill.tpl.html",
    "<div ng-repeat=\"item in items\">\n" +
    "  <div class=\"panel panel-success panel-left\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <span class=\"glyphicon glyphicon-chevron-down\" ng-click=\"Down(item._id)\" ng-show=\"item.down\">\n" +
    "      </span>\n" +
    "      <span class=\"glyphicon glyphicon-chevron-up\" ng-click=\"Up(item._id)\" ng-show=\"item.up\">\n" +
    "      </span>\n" +
    "      <h3 class=\"panel-title\">\n" +
    "        <span>{{item.name}} ({{item.finalPrice}} VND)</span>\n" +
    "      </h3>\n" +
    "      <span class=\"glyphicon glyphicon-remove pull-right\" ng-click=\"deleteItem(item)\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\" ng-show=\"item.showBody\">\n" +
    "      <select ng-change=\"selectAction(item._id, PlusObject.selectedPlus)\" ng-model=\"PlusObject.selectedPlus\" ng-options=\"plus as plus.name +' (' + plus.price +')' for plus in Plus\" class=\"form-control ng-scope ng-valid ng-dirty\" type=\"text\">\n" +
    "      </select>\n" +
    "      <ul class=\"list-group\">\n" +
    "        <li ng-repeat=\"plus in listPlus[item._id]\" class=\"list-group-item list-group-item-danger\">{{plus.name + ' (' + plus.price+')'}} VND\n" +
    "          <span class=\"glyphicon glyphicon-remove pull-right\" ng-click=\"removePlus(item._id, plus)\"></span>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modal/exportbill.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modal/exportbill.tpl.html",
    "<div class=\"panel panel-default panel-left\">\n" +
    "  <div class=\"panel-header\">\n" +
    "    <div class=\"alert alert-success\">Bill</div>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body\">\n" +
    "    <div class=\"modal-body\">\n" +
    "      <form class=\"form-horizontal\" role=\"form\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"inputEmail3\" class=\"col-sm-3 control-label label-align\">Tìm Kiếm</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <input type=\"text\" ng-model=\"name\" typeahead=\"name.name for name in getNames($viewValue)|filter:$viewValue\" class=\"form-control\" placeholder=\"Tên Khách Hàng\" typeahead-on-select=\"selectMatch($item)\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <hr>\n" +
    "        <div ng-model=\"info.customer\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"input-name\" class=\"col-sm-3 control-label label-align\">Tên</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "              <input class=\"form-control\" id=\"input-name\" placeholder=\"Tên\" value=\"{{info.customer.name}}\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"input-phone\" class=\"col-sm-3 control-label label-align\">SĐT</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "              <input class=\"form-control\" id=\"input-phone\" placeholder=\"SĐT\" value=\"{{info.customer.phone}}\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"input-addr\" class=\"col-sm-3 control-label label-align\">Địa chỉ</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "              <input class=\"form-control\" id=\"input-addr\" placeholder=\"Địa Chỉ\" value=\"{{info.customer.address}}\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <hr>\n" +
    "        <div ng-model=\"info.user\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"input-deliver\" class=\"col-sm-3 control-label label-align\">Người giao</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "              <input class=\"form-control\" id=\"input-deliver\" placeholder=\"Người Giao\" ng-model=\"userName\" typeahead=\"name.name for name in getUserNames($viewValue)|filter:$viewValue\" typeahead-on-select=\"selectUserMatch($item)\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"input-phonedeliver\" class=\"col-sm-3 control-label label-align\">SĐT</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "              <input class=\"form-control\" id=\"input-phonedeliver\" placeholder=\"SĐT Người Giao\" value=\"{{info.user.phone}}\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel-footer\">\n" +
    "      <button class=\"btn btn-primary\" ng-click=\"ok()\">OK</button>\n" +
    "    <!-- </div> -->\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("product/product.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("product/product.tpl.html",
    "<div class=\"product-main flex flex-row\">\n" +
    "  <div class=\"col-md-6 flex flex-col\">\n" +
    "    <div class=\"flex flex-col\" ng-include=\"'product/product_left.tpl.html'\"></div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6 flex flex-col\">\n" +
    "      <div class=\"flex flex-col\" ng-include=\"'product/product_right.tpl.html'\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("product/product_left.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("product/product_left.tpl.html",
    "<div class=\"flex flex-col\">\n" +
    "  <div class=\"flex-fixed ptitleright\">\n" +
    "    <div class=\"flex flex-row\">\n" +
    "      <div class=\"col-md-11 label-center\">\n" +
    "        Add New Item\n" +
    "      </div>\n" +
    "      <button class=\"col-md-1 pull-right btn btn-md btn-primary\" ng-click=\"addItem(newItem)\">\n" +
    "        Add\n" +
    "        <span class=\"glyphicon glyphicon-chevron-right\">\n" +
    "          <span>\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"flex flex-row padditem\">\n" +
    "    <div class=\"flex flex-col col-md-11\">\n" +
    "      <div class=\"flex flex-col\">\n" +
    "        <form class=\"form-horizontal flex scroll-y\" role=\"form\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <label class=\"col-md-2 control-label label-align\">Category</label>\n" +
    "            <div class=\"col-md-10\">\n" +
    "              <select ng-model=\"objectSelect.filter\" ng-change=\"Filter(objectSelect.filter)\" ng-options=\"cat.name for cat in categories\" class=\"form-control ng-scope ng-valid ng-dirty\" type=\"text\">\n" +
    "              </select>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "            <label class=\"col-md-2 control-label label-align\">Item Name</label>\n" +
    "            <div class=\"col-md-10\">\n" +
    "              <input type=\"text\" ng-model=\"newItem.name\" class=\"form-control\" placeholder=\"Item Name\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label class=\"col-md-2 control-label label-align\">Image</label>\n" +
    "            <div class=\"col-md-10\">\n" +
    "              <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Image\"> -->\n" +
    "              <input type=\"file\" class=\"form-control\" name=\"file\" onchange=\"angular.element(this).scope().uploadFile(this.files)\" />\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label class=\"col-md-2 control-label label-align\">Discription</label>\n" +
    "            <div class=\"col-md-10\">\n" +
    "              <textarea ng-model=\"newItem.description\"class=\"form-control\" rows=\"5\"></textarea>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "            <label class=\"col-md-2 control-label label-align\">Price</label>\n" +
    "            <div class=\"col-md-10\">\n" +
    "              <input type=\"text\" ng-model=\"newItem.price\" class=\"form-control\" placeholder=\"Price(VND)\">\n" +
    "            </div>\n" +
    "            <div class=\"col-md-1 pvr\">\n" +
    "\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-1 flex-fixed pvrr\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("product/product_right.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("product/product_right.tpl.html",
    "<div class=\"flex flex-col\">\n" +
    "  <div class=\"flex-fixed ptitleright label-center\">\n" +
    "    <div class=\"flex flex-row flexnopadding\">\n" +
    "      <div class=\"col-md-8\">\n" +
    "        <select ng-model=\"objectSelect.filter\" ng-change=\"Filter(objectSelect.filter)\" ng-options=\"cat.name for cat in categories\" class=\"form-control ng-scope ng-valid ng-dirty\" type=\"text\">\n" +
    "          <option value=\"\">Filter</option>\n" +
    "        </select>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-3\">\n" +
    "        <select ng-model=\"objectSelect.option\" ng-change=\"Option(objectSelect.option)\" ng-options=\"cat for cat in Options\" class=\"form-control ng-scope ng-valid ng-dirty\" type=\"text\">\n" +
    "          <option value=\"\">Sort</option>\n" +
    "        </select>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-1 pedit\">\n" +
    "        <button class=\"btn btn-primary btn-md\" ng-click=\"Edit()\">\n" +
    "          Edit\n" +
    "          <span class=\"glyphicon glyphicon-pencil\">\n" +
    "          </span>\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"flex flex-col\">\n" +
    "    <div class=\"cafe-item-list flex scroll-y\">\n" +
    "      <div class=\"item pitem\" ng-repeat=\"item in items.data|orderBy:orderby\">\n" +
    "        <div class=\"btn btn-default nocursor\">\n" +
    "          <div class=\"imgcontainer col-md-5 flex flex-col\">\n" +
    "            <img src=\"../assets/images/cofe.jpg\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "          </div>\n" +
    "          <div class=\"imgcontainer col-md-7 flex flex-col\">\n" +
    "            <div class=\"itemname flex flex-row\">\n" +
    "              <div class=\"col-md-3 pull-right\" ng-show=\"editted\">\n" +
    "                <button class=\"dropdown btn btn-default btn-xs\">\n" +
    "                  <a class=\"caret dropdown-toggle\">\n" +
    "                  </a>\n" +
    "                  <ul class=\"dropdown-menu\">\n" +
    "                    <li ng-repeat=\"choice in caret\">\n" +
    "                      <a ng-click=\"EditChoice(choice,item)\">{{choice}}</a>\n" +
    "                    </li>\n" +
    "                  </ul>\n" +
    "                </button>\n" +
    "              </div>\n" +
    "              <div class=\"col-md-9\">\n" +
    "                {{item.name}}\n" +
    "              </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"itemprice\">\n" +
    "              {{item.price}}\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
