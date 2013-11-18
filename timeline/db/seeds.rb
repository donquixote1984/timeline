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
	title:"ST",
	content:"2BDIORS",
	c1:"link",
	color:"#5C9DFF"

	},
	{
	start_time: Time.mktime(2007,9,1),
	end_time: Time.mktime(2009,7,1),
	title:"MA",
	content:"2BDIORS",
	c1:"link",
	color: "#33ad33"

	},
	{
	start_time: Time.mktime(2009,9,1),
	end_time: Time.mktime(2010,7,1),
	title:"SE",
	content:"TAKE THE SHIT",
	c1:"link",
	color:"#B80000"
	},
	{
		start_time: Time.mktime(2010,7,1),
		end_time: Time.mktime(2011,11,1),
		title:"SE2",
		content:"TAKE THE FUCKIN SHIT",
		c1:"link",
		color:"#855C33"
	},
	{
		start_time: Time.mktime(2010,11,18),
		end_time: Time.mktime(2013,11,1),
		title:"SE3",
		content:"TAKE THE FUCKIN SHIT",
		c1:"link",
		color:"#B84DB8",
		events_attributes: [
			{
				start_time: Time.mktime(2010,11,1),
				end_time: Time.mktime(2011,5,1),
				event_detail: EventDetail.create({
					event_category_id: 1,
					data:"TEST lorem",
					content:"lorem",
				})
			},
			{
				start_time: Time.mktime(2011,6,1),
				end_time: Time.mktime(2011,11,1),
				event_detail: EventDetail.create({
					event_category_id: 2,
					data:"Cognos Learning Center",
					content:"Cognos Learning Center",
				})
			},
			{
				start_time: Time.mktime(2011,12,1),
				end_time: Time.mktime(2012,9,1),
				event_detail: EventDetail.create({
					event_category_id: 3,
					data:"OpenPages 6.2",
					content:"OpenPages 6.2",
				})
			},
			{
				start_time: Time.mktime(2012,10,1),
				end_time: Time.mktime(2013,6,1),
				event_detail: EventDetail.create({
					event_category_id: 1,
					data:"Sterling TMS Report Migration",
					content:"Sterling TMS Report Migration"
				})
			},
			{
				start_time: Time.mktime(2013,7,1),
				event_detail: EventDetail.create({
					event_category_id: 1,
					data:"Sterling Nirvana",
					content:"Sterling Nirvana"
				})
			}
		]
	}]
	)


