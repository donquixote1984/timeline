# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20131111143049) do

  create_table "careers", force: true do |t|
    t.date     "start_time"
    t.date     "end_time"
    t.string   "title"
    t.text     "content"
    t.string   "c1"
    t.integer  "c2"
    t.string   "c3"
    t.string   "c4"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "event_categories", force: true do |t|
    t.string   "category"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "event_details", force: true do |t|
    t.integer  "event_category_id"
    t.text     "data"
    t.text     "content"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "event_times", force: true do |t|
    t.datetime "time"
    t.integer  "year"
    t.integer  "month"
    t.integer  "day"
    t.text     "content"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "event_types", force: true do |t|
    t.string   "type_string"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "events", force: true do |t|
    t.string   "event_time_id"
    t.integer  "event_type_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "event_detail_id"
    t.string   "career_id"
  end

end
