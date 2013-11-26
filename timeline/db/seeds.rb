#encoding: utf-8 
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
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
	color: "#33ad33",
	c3:"吉林大学"
	},
	{
		start_time: Time.mktime(2009,9,1),
		end_time: Time.mktime(2010,7,1),
		title:"软件工程师",
		content:"BI系统前端，后端开发",
		c1:"http://www.gbase.cn/image/bps-01_clip_image001.png",
		color: "#BF5E5E",
		c3:"天津南大通用"
	},
	{
		start_time: Time.mktime(2010,7,1),
		end_time: Time.mktime(2011,11,1),
		title:"通讯工程师",
		content:"企业级路由器驱动开发",
		c1:"http://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/ZTE_logo.svg/200px-ZTE_logo.svg.png",
		color:"#FF9933",
		c3:"中兴通讯"
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
					event_category_id: 2,
					data:"AAF Datastage Integration",
					content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
					title:"AAF Datestage Integration"
				})
			},
			{
				start_time: Time.mktime(2011,6,1),
				end_time: Time.mktime(2011,11,1),
				event_detail: EventDetail.create({
					event_category_id: 2,
					data:"Cognos Learning Center",
					content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
					title:"Cognos Learning Center"
				})
			},
			{
				start_time: Time.mktime(2011,12,1),
				end_time: Time.mktime(2012,9,1),
				event_detail: EventDetail.create({
					event_category_id:2,
					data:"OpenPages 6.2",
					content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
					title:"OpenPages 6.2"
				})
			},
			{
				start_time: Time.mktime(2012,10,1),
				end_time: Time.mktime(2013,6,1),
				event_detail: EventDetail.create({
					event_category_id:2,
					data:"Sterling TMS Report Migration",
					content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
					title: "Sterling TMS Report Migration"
				})
			},
			{
				start_time: Time.mktime(2013,7,1),
				end_time: Time.mktime(2013,11,20),
				event_detail: EventDetail.create({
					event_category_id:2,
					data:"Sterling Nirvana",
					content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
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
					event_category_id:2,
					data:"Distributed Web Image crawler by Scrapy&Python",
					content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
					title:"Distributed Web Image crawler by Scrapy&Python"
					})
			},
			{
				start_time:Time.mktime(2013,1,1),
				end_time:Time.mktime(2013,11,1),
				event_detail: EventDetail.create({
					event_category_id:2,
					data:"IBM HR Career Path",
					content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
					title:"IBM HR Career Path"
					})
			},
		]
	}]
	)


