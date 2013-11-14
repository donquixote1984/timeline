# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Career.create(
	[{
	start_time: Time.mktime(2003,9,1),
	end_time: Time.mktime(2007,7,1),
	title:"ST",
	content:"2BDIORS",
	c1:"link"
	},
	{
	start_time: Time.mktime(2007,9,1),
	end_time: Time.mktime(2009,7,1),
	title:"MA",
	content:"2BDIORS",
	c1:"link"
	},
	{
	start_time: Time.mktime(2009,9,1),
	end_time: Time.mktime(2010,7,1),
	title:"SE",
	content:"TAKE THE SHIT",
	c1:"link"
	},
	{
		start_time: Time.mktime(2010,7,1),
		end_time: Time.mktime(2010,11,1),
		title:"SE2",
		content:"TAKE THE FUCKIN SHIT",
		c1:"link"
	},
	{
		start_time: Time.mktime(2010,11,18),
		end_time: Time.mktime(2013,11,1),
		title:"SE3",
		content:"TAKE THE FUCKIN SHIT",
		c1:"link"
	}]
	)


