/**
 *
 * @description Lottery 539
 *
 * @version 2021/11/20 ace 初始版本。
 *
 * @see {@link https://zh.wikipedia.org/wiki/%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E5%85%AC%E7%9B%8A%E5%BD%A9%E5%88%B8|公益彩券 - 維基百科，自由的百科全書}
 *
 * @see {@link http://requirejs.org/|RequireJS}
 *
 * @see {@link http://underscorejs.org/|Underscore.js}
 * @see {@link https://github.com/jashkenas/underscore|jashkenas/underscore: JavaScript's utility _ belt}
 *
 * @see {@link http://backbonejs.org/|Backbone.js}
 * @see {@link https://github.com/jashkenas/backbone|jashkenas/backbone: Give your JS App some Backbone with Models, Views, Collections, and Events}
 * @see {@link https://github.com/jashkenas/backbone/wiki/Tutorials%2C-blog-posts-and-example-sites|Tutorials, blog posts and example sites · jashkenas/backbone Wiki}
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex|tabindex - HTML: HyperText Markup Language | MDN}
 *
 * @see {@link https://jquery.com/|jQuery}
 * @see {@link https://api.jquery.com/remove/|.remove() | jQuery API Documentation}
 *
 * @see {@link https://getbootstrap.com/|Bootstrap · The most popular HTML, CSS, and JS library in the world.}
 * @see {@link https://getbootstrap.com/docs/5.0/forms/checks-radios/|Checks and radios · Bootstrap v5.0}
 *
 * @see {@link https://docs.nwjs.io/en/latest/For%20Users/Advanced/Use%20Native%20Node%20Modules/|Use Native Node Modules - NW.js Documentation}
 * @see {@link https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array|javascript - How can I remove a specific item from an array? - Stack Overflow}
 *
 * @comment 今彩539從2007年開始發行，其遊戲規則是自第1~39號當中選擇5個號碼投注，每注售價為新台幣50元，開獎也是開出五個號碼，沒有特別號的設置。於每周一至周六開獎，採固定獎金之方式分配，並有系統組合、系統配號和多期投注的玩法。頭獎金額為新台幣800萬元，惟單期今彩539頭獎獎項最高總獎金支出上限為新台幣2400萬元，若該期頭獎獎項之總獎金逾此上限時，則頭獎獎額之獎金分配方式將改為均分制，由所有頭獎中獎人依其中獎注數均分。頭獎的中獎機率約為58萬分之一。
 *
 * @author ace
 *
 * @todo 2021/12/11 ace 優化捲軸樣式。
 *
 */

Configuration.loadJS(Configuration.requirejsFile, function() {

	requirejs.config(tw.ace33022.RequireJSConfig);
	
	// Configuration.loadCSS(Configuration["JSLibDir"] + '/tablesort/tablesort.css');
	// Configuration.loadCSS('stylesheet/tablesort.css');
	// Configuration.loadCSS('https://cdn.jsdelivr.net/npm/BootSideMenu@0.0.1/css/BootSideMenu.css');
	// Configuration.loadCSS(Configuration["JSLibDir"] + '/bootstrap/BootSideMenu-1.0.0/css/BootSideMenu.css');
	
	requirejs(["tw.ace33022.vo.Lottery539Log", "tw.ace33022.util.browser.CommonForm", "js-logger", "moment", "sprintfjs", "underscore"], function(Lottery539Log, CommonForm, Logger, moment) {

		function setCheckedNumberBackgroundColor() {
		
			jQuery('#' + tableId + ' > tbody > tr').each(function(index, element) {
			
				jQuery(element).find('td').each(function(index, element) {
				
					jQuery(element).removeClass('bg-primary');
					
					if ((index >= 3) && (index <= 7)) {
					
						if (_.indexOf(condition["checkedNumber"], jQuery(element).text()) != -1) jQuery(element).addClass('bg-primary');
					}
				});
			});
		}

		var tableId = 'table' + Math.random().toString(36).substr(2, 6);

		var condition = {

			"numCount": [],
			"checkedNumber": []
		};
		
		var status = '';
		var retrivedData = '';
		
		Logger.useDefaults();
		
		Logger.setLevel(Logger.INFO);
		
		Logger.log = Logger.info;
		
		CommonForm.showMarqueebar({
		
			"title": "資料載入中‧‧‧",
			"onShownCallback": function(closeMarqueebar) {
			
				var index;
				
				jQuery(window).on('focus', function(event) {

					if ((jQuery('.modal-open').length == 0) && (jQuery('.modal-backdrop').length == 0)) jQuery('#' + tableId + ' tbody').focus();
				});
				
				jQuery(window).on('resize', function(event) {
				
					jQuery('#' + tableId + ' tbody').css('height', (window.innerHeight - jQuery('#' + tableId + ' caption')[0].clientHeight - jQuery('#' + tableId + ' thead')[0].clientHeight) + 'px');
					
					// jQuery('#' + tableId).parent().css('height', window.innerHeight - jQuery('.navbar').height() - jQuery(jQuery('.panel').find('table')[0]).height() - 90 - 30);
					
					// self.getContainer().find('thead > tr:eq(0) > th:eq(0)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(0)').outerWidth());
					// self.getContainer().find('thead > tr:eq(0) > th:eq(1)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(1)').outerWidth());
					// self.getContainer().find('thead > tr:eq(0) > th:eq(2)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(2)').outerWidth() + jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(3)').outerWidth() + jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(4)').outerWidth() + jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(5)').outerWidth() + jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(6)').outerWidth() + jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(7)').outerWidth());
					// self.getContainer().find('thead > tr:eq(0) > th:eq(3)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(8)').outerWidth());
					// self.getContainer().find('thead > tr:eq(0) > th:eq(4)').outerWidth(jQuery('#' + tableId + ' tbody tr:eq(0)>td:eq(9)').outerWidth());
				});
				
				if (typeof nw !== 'undefined') {
				
					/**
					 *
					 * @description Read Lottery593Log data from file or database.
					 *
					 * @see {@link https://stackoverflow.com/questions/6456864/why-does-node-js-fs-readfile-return-a-buffer-instead-of-string|javascript - Why does Node.js' fs.readFile() return a buffer instead of string? - Stack Overflow}
					 *
					 * @todo
					 *
					 */
					console.log(require('os').platform());
					
					// 使用node.js的函數庫取得資料庫資料。
					// var sqlite3 = require('sqlite3').verbose();
					// var db = new sqlite3.Database('W:/tool/package/LangEnv/Java/apache-tomcat/webapps/ROOT/WEB-INF/db/SQLite/base.sqlite3');
					
					// console.log(require('fs').readFileSync(process["env"]["WEB-INFDir"] + '/htdoc/program/GIT00040/doc/Lottery539Log.json', 'utf8'));
					
					require('fs').readFile(process["env"]["WEB-INFDir"] + '/htdoc/program/GIT00040/doc/Lottery539Log.json', 'utf8', function(err, data) {

						if (err) {
						
							console.log('Read file occured error, message: ' + err);
						}
						else {
						
							retrivedData = data;
							
							status = 'success';
							
							closeMarqueebar();
						}
					});
				}
				else {
				
					// 使用Web Service取得資料。
					// retrivedData = lottery539LogData;
					
					// status = 'success';
					
					// closeMarqueebar();
					
					jQuery.getJSON('https://script.google.com/macros/s/AKfycbxlPnF99hcvYijHCCU2_mevaFpZi1g157DBT4Drd-sABh5dEDI7_26wpN10CpfbM1O33Q/exec', function(data, textStatus, jqXHR) {
					// jQuery.getJSON('http://127.0.0.1:8088/ws/rs/LOT00010', function(data, textStatus, jqXHR) {
					
						status = textStatus;
						
						if (status == 'success') retrivedData = JSON.stringify(data["result"]);

						closeMarqueebar();
					});
				}
			},
			"afterHiddenCallback": function() {
			
				if (status == 'success') {
				
					// createContent(retrivedData);
					CommonForm.showMarqueebar({
					
						"title": "資料處理中‧‧‧",
						"onShownCallback": function(closeMarqueebar) {
						
							var jsonData = JSON.parse(retrivedData);
							
							var vo;

							var index;
							var tag;

							var totalNum = 0;
							
							var tag = ''
											// + '<div class="panel panel-default" style="width: 100%;">'
											+ '  <table id="' + tableId + '" class="table table-striped table-bordered" style="width: 100%;">'
											+ '    <caption style="text-align: center; vertical-align: middle; font-weight: bold; cursor: pointer;">今彩539統計資料</caption>'
											+ '    <thead style="overflow-y: scroll;">'
											+ '      <tr>'
											+ '        <th class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">期別</th>'
											+ '        <th class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">開獎日</th>'
											+ '        <th class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">獎號總合</th>'
											+ '        <th class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">獎號</th>'
											+ '        <th class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">獎號</th>'
											+ '        <th class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">獎號</th>'
											+ '        <th class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">獎號</th>'
											+ '        <th class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">獎號</th>'
											+ '        <th class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">頭獎</th>'
											+ '        <th class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">貳獎</th>'
											+ '        <th class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">參獎</th>'
											+ '        <th class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">肆獎</th>'
											+ '      </tr>'
											+ '    </thead>'
											+ '    <tbody tabindex="0" style="overflow-y: scroll;"></tbody>'
											+ '  </table>'
											// + '</div>'
											+ '';
							jQuery('body').append(tag);
							
							jQuery('#' + tableId).css('min-width', '908px');
							
							// jQuery('#' + tableId + ' > caption').text('今彩539統計資料');
							
							// jQuery('#' + tableId + ' > tbody > tr').remove();
							
							for (index = 1; index <= 39; index++) condition["numCount"][sprintf("%02d", index)] = 0;
							
							for (index = 0; index < jsonData.length; index++) {

								vo = new Lottery539Log();
							
								vo.setValueFromJSONObject(jsonData[index]);
								
								condition["numCount"][vo.getNum01()]++;
								condition["numCount"][vo.getNum02()]++;
								condition["numCount"][vo.getNum03()]++;
								condition["numCount"][vo.getNum04()]++;
								condition["numCount"][vo.getNum05()]++;
								
								totalNum = parseInt(vo.getNum01()) + parseInt(vo.getNum02()) + parseInt(vo.getNum03()) + parseInt(vo.getNum04()) + parseInt(vo.getNum05());

								tag = ''
										+ '<tr>'
										+ '  <td class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">' + vo.getPeriod() + '</td>'
										+ '  <td class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">' + moment(vo.getDrawDate(), 'YYYYMMDD', true).format('YYYY/MM/DD') + '</td>'
										+ '  <td class="col-xs-1" style="text-align: right; vertical-align: middle; cursor: default;">' + totalNum + '</td>'
										+ '  <td class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">' + vo.getNum01() + '</td>'
										+ '  <td class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">' + vo.getNum02() + '</td>'
										+ '  <td class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">' + vo.getNum03() + '</td>'
										+ '  <td class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">' + vo.getNum04() + '</td>'
										+ '  <td class="col-xs-1" style="text-align: center; vertical-align: middle; cursor: default;">' + vo.getNum05() + '</td>'
										+ '  <td class="col-xs-1" style="text-align: right; vertical-align: middle; cursor: default;">' + vo.getPrize01() + '</td>'
										+ '  <td class="col-xs-1" style="text-align: right; vertical-align: middle; cursor: default;">' + vo.getPrize02() + '</td>'
										+ '  <td class="col-xs-1" style="text-align: right; vertical-align: middle; cursor: default;">' + vo.getPrize03() + '</td>'
										+ '  <td class="col-xs-1" style="text-align: right; vertical-align: middle; cursor: default;">' + vo.getPrize04() + '</td>'
										+ '</tr>';
								jQuery('#' + tableId + ' tbody').append(tag);
							}
							
							jQuery('#' + tableId + ' thead').css('display', 'block');
							jQuery('#' + tableId + ' tbody').css('display', 'block');
							jQuery('#' + tableId + ' tr').css('display', 'block');
							jQuery('#' + tableId + ' th').css('display', 'block');
							jQuery('#' + tableId + ' td').css('display', 'block');
							
							jQuery('#' + tableId + ' thead tr th').css('float', 'left');
							jQuery('#' + tableId + ' tbody tr td').css('float', 'left');

							jQuery('#' + tableId + ' td').css('padding', '1px');
							
							jQuery('#' + tableId + ' > tbody > tr').each(function(index, element) {
							
								jQuery(element).find('td').each(function(index, element) {
								
									if ((index >= 3) && (index <= 7)) {
									
										jQuery(element).on('click', function(event) {
										
											if (jQuery(element).hasClass('bg-primary') == true) {
											
												condition["checkedNumber"] = condition["checkedNumber"].filter(function(item) { return item !== jQuery(element).text(); });
												
												setCheckedNumberBackgroundColor();
											}
											else {
											
												if (condition["checkedNumber"].length < 5) {
												
													condition["checkedNumber"].push(jQuery(element).text());
													setCheckedNumberBackgroundColor();
												}
											}
										});
									}
								});
							});
							
							jQuery('#' + tableId + ' > caption').on('click', function(event) {
							
								var modalId = 'modal' + Math.random().toString(36).substr(2, 6);
								var hcLotteryId = 'hcLottery' + Math.random().toString(36).substr(2, 6);

								var tag;
								
								var hcOption = {};
								
								tag = '<div class="modal fade" id="' + modalId + '" tabindex="-1" role="dialog">'
										+ '  <div class="modal-dialog" style="width: 100%; height: 100%;" role="document">'
										+ '    <div class="container">'
										+ '      <div class="modal-content">'
										+ '        <div class="modal-body" style="margin: 0px auto;">'
										+ '          <div id="' + hcLotteryId + '"></div>'
										+ '        </div>'
										+ '        <div class="modal-footer">'
										+ '          <button type="button" class="btn btn-primary" data-dismiss="modal">關閉</button>'
										+ '        </div>'
										+ '      </div>'
										+ '    </div>'
										+ '  </div>'
										+ '</div>';
								jQuery(tag).appendTo('body');
								
								jQuery('#' + modalId).on('shown.bs.modal', function() {

									// console.log(jQuery('.modal.fade').css('transition'));
									// console.log(jQuery('.modal.fade').css('transition-duration'));
									// console.log(jQuery('.modal.fade').css('transition-delay'));
									
									requirejs(["highcharts"], function() {
									
										function countNum() {
										
											var result = new Array();
											
											var index;
											
											for (index = 1; index <= 39; index++) {

												color = '#4FC0FF';

												if (_.indexOf(condition["checkedNumber"], sprintf('%02d', index)) != -1) color = '#337AB7';

												result.push({

													"y": condition["numCount"][sprintf("%02d", index)],
													"color": color
												});
											}
											
											return result;
										}

										var index;

										hcOption["chart"] = {"type": "column"};
										hcOption["title"] = {"text": "獎號統計資料"};

										hcOption.xAxis = {};

										hcOption.xAxis.categories = new Array();
										for (index = 1; index <= 39; index++) hcOption.xAxis.categories.push(sprintf("%02d", index));

										hcOption.yAxis = {};
										hcOption.yAxis["min"] = 0;
										hcOption.yAxis["title"] = { "text": "開出次數" };

										hcOption.series = new Array();

										hcOption.series.push({

											"name": "獎號",
											"data": countNum()
										});

										hcOption.plotOptions = {

											"series": {

												"events": {

													"click": function(event) {

														if (event.point.options["color"] == '#337AB7') {

															event.point.options["color"] = '#4FC0FF';
														}
														else {

															event.point.options["color"] = '#337AB7';
														}

														event.point.color = event.point.options["color"];
														event.point.update();
													}
												}
											}
										};

										hcOption["tooltip"] = {

											"shared": true,
											"useHTML": true
										};

										hcOption["tooltip"]["headerFormat"] = '<div style="font-size:10px">{series.name}:{point.key}</div>';
										hcOption["tooltip"]["pointFormat"] = '<div style="font-size:10px">開出次數:{point.y}</div>';
										
										jQuery('#' + hcLotteryId).highcharts(hcOption);
									});
								});
								
								jQuery('#' + modalId).on('hidden.bs.modal', function() {
								
									condition["checkedNumber"] = new Array();
									
									hcOption["series"][0]["data"].forEach(function(element, index) {

										if (element["color"] == '#337AB7') condition["checkedNumber"].push(sprintf('%02d', index + 1));
									});

									jQuery(this).remove();
									
									jQuery('#' + tableId + ' tbody').focus();
									
									setCheckedNumberBackgroundColor();
								});
								
								jQuery('#' + modalId).modal('show');
							});
							
							// new Tablesort(jQuery('#' + tableId)[0]);
							
							closeMarqueebar();
						},
						"afterHiddenCallback": function() {

							// @todo 2021/05/25 ace 自動聚焦在tbody。
							// jQuery('#' + tableId + ' tbody').css('height', (window.innerHeight - 45) + 'px');
							jQuery('#' + tableId + ' tbody').css('height', (window.innerHeight - jQuery('#' + tableId + ' caption')[0].clientHeight - jQuery('#' + tableId + ' thead')[0].clientHeight) + 'px');
							
							jQuery('#' + tableId + ' tbody').css('outline', 'none');	// focus tbody時不顯示外框線。
							
							jQuery('body').css('padding-left', '0px');
							jQuery('body').css('padding-right', '0px');
							
							jQuery('#' + tableId + ' tbody').focus();
						}
					});
				}
				else {
				
					CommonForm.showMessage('資料載入過程有誤！');
				}
			}
		});
	});
});