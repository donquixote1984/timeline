#encoding: utf-8 
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Person.create ({
	name:"WGX",
	age:29,
	city:"上海",
	mail:"donquixote1984@163.com",
	detail:"2009年毕业与吉林大学，后加入IBM CDL中国研发中心，从事J2EE开发，对互联网和前端技术有浓厚兴趣",
	address:"上海浦东新区张江科苑路399号",
	icon:"https://en.gravatar.com/userimage/58464079/f0d6ed403d31a2ff3caa25db15b2a53a.jpg?size=200",
	c1:"http://54.254.207.87"
	})
EventCategory.create(
[
	{category: "MAP"},
	{category: "TEXT"},
	{category: "IMAGE"}	
]
)
Career.create(
	[{
	start_time: Time.mktime(2003,9,1),
	end_time: Time.mktime(2007,7,1),
	title:"学士",
	content:"",
	c1:"http://t2.gstatic.com/images?q=tbn:ANd9GcSsnDxCZ3QwYe2-49pYMvog0KocE-Y3k3bwshLMpV6kksoyEXsGSQ",
	color:"#5C9DFF",
	c3:"吉林大学"

	},
	{
	start_time: Time.mktime(2007,9,1),
	end_time: Time.mktime(2009,7,1),
	title:"硕士",
	content:"",
	c1:"http://t2.gstatic.com/images?q=tbn:ANd9GcSsnDxCZ3QwYe2-49pYMvog0KocE-Y3k3bwshLMpV6kksoyEXsGSQ",
	color: "#BF5E5E",
	c3:"吉林大学",
	events_attributes: [
			{
				start_time: Time.mktime(2010,1,1),
				end_time: Time.mktime(2010,2,1),
				event_detail: EventDetail.create({
					event_category_id: 2,
					data:"AAF Datastage Integration",
					content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
					title:"AAF Datestage Integration"
				})
			},
			{
				start_time: Time.mktime(2010,3,1),
				end_time: Time.mktime(2010,6,1),
				event_detail: EventDetail.create({
					event_category_id: 2,
					data:"AAF Datastage Integration",
					content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
					title:"AAF Datestage Integration"
				})
			}
		]
	},
	{
		start_time: Time.mktime(2009,9,1),
		end_time: Time.mktime(2010,7,1),
		title:"软件工程师",
		content:"BI系统前端，后端开发",
		c1:"http://www.gbase.cn/image/bps-01_clip_image001.png",
		color: "#FF9933",
		c3:"南大通用",
		events_attributes: [
			{
				start_time: Time.mktime(2010,1,1),
				end_time: Time.mktime(2010,2,1),
				event_detail: EventDetail.create({
					event_category_id: 2,
					data:"AAF Datastage Integration",
					content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
					title:"AAF Datestage Integration"
				})
			},
			{
				start_time: Time.mktime(2010,3,1),
				end_time: Time.mktime(2010,6,1),
				event_detail: EventDetail.create({
					event_category_id: 2,
					data:"AAF Datastage Integration",
					content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
					title:"AAF Datestage Integration"
				})
			}
		]
	},
	{
		start_time: Time.mktime(2010,11,18),
		end_time: Time.mktime(2013,11,1),
		title:"软件工程师",
		content:"J2EE程序开发, BI开发,Java, Rails, 前端",
		c1:"http://a1.att.hudong.com/83/01/01100000000014129472014509388.jpg",
		color:"#7575A3",
		c3:"IBM",
		events_attributes: [
			{
				start_time: Time.mktime(2010,12,1),
				end_time: Time.mktime(2011,6,1),
				event_detail: EventDetail.create({
					event_category_id: 3,
					data:"http://zowchow.com/files/2013/01/java-logo.jpg",
					content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
					title:"AAF Datestage Integration"
				})
			},
			{
				start_time: Time.mktime(2011,6,1),
				end_time: Time.mktime(2011,11,1),
				event_detail: EventDetail.create({
					event_category_id: 3,
					data:"http://zowchow.com/files/2013/01/java-logo.jpg",
					content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
					title:"Cognos Learning Center"
				})
			},
			{
				start_time: Time.mktime(2011,12,1),
				end_time: Time.mktime(2012,9,1),
				event_detail: EventDetail.create({
					event_category_id:3,
					data:"http://zowchow.com/files/2013/01/java-logo.jpg",
					content:"OpenPages是IBM BA风险管控产品. 团队负责与国外合作，进行OpenPages产品升级和打包, Jenkins持续集成Ant构建, 以及补丁修复等. 采用J2EE/Weblogic开发",
					title:"OpenPages 6.2"
				})
			},
			{
				start_time: Time.mktime(2012,10,1),
				end_time: Time.mktime(2013,6,1),
				event_detail: EventDetail.create({
					event_category_id:3,
					data:"http://images.all-free-download.com/images/graphiclarge/cognos_62958.jpg",
					content:"Sterling TMS是Sterling产品线的物流传输管理模块，团队负责报表从Business Object到Cognos迁移, 采用Cognos Framework Manager进行数据建模， Cognos Report Studio进行报表设计， 并实现报表数据优化",
					title: "Sterling TMS Report Migration"
				})
			},
			{
				start_time: Time.mktime(2013,7,1),
				end_time: Time.mktime(2013,11,20),
				event_detail: EventDetail.create({
					event_category_id:2,
					data:"Sterling Nirvana",
					content:"IBM企业级文件传输产品. 团队负责开发新版本文件服务器监控组件. 包括文件传输统计， 服务器运行状况， 系统报警等. 采用JMX/Dojo实现。",
					title:"Sterling Nirvana"
				})
			},
			{
				start_time:Time.mktime(2011,11,1),
				end_time:Time.mktime(2011,11,6),
				event_detail: EventDetail.create({
					event_category_id:2,
					data:"HIT University Teaching Program",
					content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
					title:"HIT University Teaching Program"
					})
			},
			{
				start_time:Time.mktime(2012,4,1),
				end_time:Time.mktime(2012,8,1),
				event_detail: EventDetail.create({
					event_category_id:3,
					data:"http://www.python.org/images/python-logo.gif",
					content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
					title:"Distributed Web Image crawler by Scrapy&Python"
					})
			},
			{
				start_time:Time.mktime(2013,1,1),
				end_time:Time.mktime(2013,11,1),
				event_detail: EventDetail.create({
					event_category_id:3,
					data:"http://rubyonrails.org/images/rails.png",
					content:"IBM 40万员工Career path平台,统计内部员工职业轨迹，组织结构树和组织动态。并将所有员工的职业发展记录在案，方便部门信息对称和员工规划。采用Web app形式发布到内网云平台。系统采用Lighttpd/FastCGI/Ruby on Rails/MongoDB架构,前端采用HTML5/CSS3/jQuery/Sass技术实现组织结构和个人时间轴, 后端采用Rails 4.0实现业务逻辑，MongoDB服务端javascript数据清洗, 并用Ruby实现内网HR信息爬虫, 个人负责总体架构和全部开发.并完成组件级开发: 1. 实现基于Canvas的组织结构图(Sina App Engine): http://frenzyyydonquixote.sinaapp.com/ 2. 实现基于时间段的时间轴组件(Amazon EC2): http://54.254.207.87",
					title:"IBM HR Career Path",
					c1:""
					})
			},
		]
	}]
	)


