/** * * @description Turn lottery539_log data to JSON File * * @version 2021/12/09 ace 初始版本。 * * @see <a href="https://nodejs.org/api/fs.html">File System | Node.js v13.11.0 Documentation</a> * @see <a href="https://nodejs.org/api/process.html">Process | Node.js v13.11.0 Documentation</a> * * @see <a href="https://www.npmjs.com/package/sqlite3">sqlite3 - npm</a> * @see <a href="https://github.com/mapbox/node-sqlite3">GitHub - mapbox/node-sqlite3: Asynchronous, non-blocking SQLite3 bindings for Node.js</a> * * @see <a href="http://www.nodebeginner.org/index-zh-tw.html">Node入門</a> * @see <a href="https://www.tutorialsteacher.com/nodejs/nodejs-file-system">Node.js File System</a> * * @require * * @author ace * */if (!process.env.NODE_PATH) {	console.log('環境變數NODE_PATH沒有設定！');  process.exit(1);}// console.log('process.env.NODE_PATH:' + process.env.NODE_PATH);// var Configuration = require(process["env"]["ConfigurationFile"]);var Configuration = require('tw/Configuration.js');var requirejs = require('requirejs/bin/r.js');  // require.jsrequirejs.config(require('tw/ace33022/RequireJSConfig.js'));console.log('process.env.WEB-INFDir: ' + process["env"]["WEB-INFDir"]);console.log('Execute JS file: ' + __filename);var sqlite3 = require('sqlite3').verbose();// var db = new sqlite3.Database('W:/tool/package/LangEnv/Java/apache-tomcat/webapps/ROOT/WEB-INF/db/SQLite/base.sqlite3');var db = new sqlite3.Database(process["env"]["WEB-INFDir"] + '/db/SQLite/base.sqlite3');var arrLottery539 = new Array();db.serialize(function() {	db.each('select * from lottery539_log order by period', 		function(err, row) {				var vo = require('tw/ace33022/vo/Lottery539Log.js');						if (err != null) process.exit(1);						// console.log(row["period"] + '：' + row["draw_date"]);						vo.setPeriod(row["period"]);			vo.setDrawDate(row["draw_date"]);			vo.setNum01(row["num01"]);			vo.setNum02(row["num02"]);			vo.setNum03(row["num03"]);			vo.setNum04(row["num04"]);			vo.setNum05(row["num05"]);			vo.setPrize01(row["prize01"]);			vo.setPrize02(row["prize02"]);			vo.setPrize03(row["prize03"]);			vo.setPrize04(row["prize04"]);						arrLottery539.push(vo.toJSONObject());		},		function(err, recordCount) {					// console.log(recordCount);			// console.log(JSON.stringify(arrLottery539));			// console.log(process["env"]["WEB-INFDir"] + '/htdoc/program/GIT00040/doc/Lottery539Log.json');						if (err != null) {							console.log('Read from db occured error, message: ' + err);								process.exit(1);			}						require('fs').writeFile(process["env"]["WEB-INFDir"] + '/htdoc/program/GIT00040/doc/Lottery539Log.json', JSON.stringify(arrLottery539), function(err) {				if (err) {									console.log('Write file occured error, message: ' + err);										process.exit(1);				}			});		}	);});db.close();