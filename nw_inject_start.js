/**
 *
 * @description NW.js inject_js_start
 *
 * @version 2017/09/29 初始版本。
 *
 * @author ace
 * 
 * @see {@link http://nwjs.io/|NW.js}
 *
 */

process["env"]["WEB-INFDir"] = 'W:/tool/package/LangEnv/Java/apache-tomcat/webapps/ROOT/WEB-INF';
// process.env.NODE_PATH = 'W:/tool/package/LangEnv/Java/apache-tomcat/webapps/ROOT/WEB-INF/node_modules';
process.env.NODE_PATH = 'W:/tool/package/LangEnv/Java/apache-tomcat/webapps/ROOT/WEB-INF/tool/package/LangEnv/JavaScript/nodeJS-x64/node_modules;W:/tool/package/LangEnv/Java/apache-tomcat/webapps/ROOT/WEB-INF/htdoc/javascript';
// process.env.ConfigurationFile = 'W:/tool/package/LangEnv/Java/apache-tomcat/webapps/ROOT/WEB-INF/htdoc/javascript/tw/Configuration.js';
