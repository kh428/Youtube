# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.destroy_all
Channel.destroy_all
Video.destroy_all

user1 = User.create({username: "Guest", password: "123123123"})
user2 = User.create({username: "TheGreatAmericanKitchen", password: "TheGreatAmericanKitchen"})

channel1 = Channel.create({name: user1.username, user_id: user1.id })
channel2 = Channel.create({name: user2.username, user_id: user2.id })

video1 = Video.create({title: "What is a Maillard Reaction?", description: "The video explains what Maillard Reaction is along with the right way to cook a perfect steak.
", channel_id: channel1.id})

video2 = Video.create({title: "Why I use a 300 dollar pan", description: "Copper vs Castiron vs nonstick", channel_id: channel2.id})



video1.video.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/%E1%84%80%E1%85%A9%E1%84%80%E1%85%B5+%E1%84%80%E1%85%AE%E1%86%B8%E1%84%80%E1%85%B5+%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC.mp4'), filename: 'how_to_cook_a_steak.avi')
video1.thumbnail.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/Screen+Shot+2019-05-08+at+12.39.19+PM.png'), filename: 'how_to_cook_a_steak_thumbnail.jpg')
# video2.video.attach(io: open('<your_file_url>'), filename: 'why300dollarpan.avi')
# video2.thumbnail.attach(io: open('<your_file_url>'), filename: 'why300dollarpan.jpg')




