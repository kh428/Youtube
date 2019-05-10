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

user1 = User.create!({username: "Guest", password: "123123123"})
user2 = User.create!({username: "The Great American Kitchen", password: "TheGreatAmericanKitchen"})
user3 = User.create!({username: "CopperPan", password: "CopperPan"})
user4 = User.create!({username: "BerneseBreeder", password: "BerneseBreeder"})
user5 = User.create!({username: "Amiyo", password: "Amiyo123123"})


channel1 = Channel.create!({name: user1.username, user_id: user1.id })
channel2 = Channel.create!({name: user2.username, user_id: user2.id })
channel3 = Channel.create!({name: user3.username, user_id: user3.id })
channel4 = Channel.create!({name: user4.username, user_id: user4.id })
channel5 = Channel.create!({name: user5.username, user_id: user5.id })


video1 = Video.create!({title: "What is a Maillard Reaction?", description: "The video explains what Maillard Reaction is along with the right way to cook a perfect steak.
", channel_id: channel1.id})
video2 = Video.create!({title: "Heard of Seasoning in layers?", description: "Seasoning in layers is important when cooking. I will explain to you how.", channel_id: channel3.id})
video3 = Video.create!({title: "[ASMR] Luffy Dinner", description: "Luffy is a four year old Bernese Mountain Dog Mix", channel_id: channel4.id})
video4 = Video.create!({title: "Make Your Food Taste Better with a Cast Iron Pan", description: "Castiron pan is the ultimate cooking pan when searing a steak", channel_id: channel2.id})
video5 = Video.create!({title: "10k Subscribers Thank You", description: "Thank you for subscribing to my channel", channel_id: channel2.id})
video6 = Video.create!({title: "The Science Behind Avoiding Plantar Fasciitis", description: "Plantar fasciitis (PLAN-tur fas-e-I-tis) is one of the most common causes of heel pain. It involves inflammation of a thick band of tissue that runs across the bottom of your foot and connects your heel bone to your toes (plantar fascia). Plantar fasciitis commonly causes stabbing pain that usually occurs with your first steps in the morning. As you get up and move more, the pain normally decreases, but it might return after long periods of standing or after rising from sitting. Plantar fasciitis is more common in runners. In addition, people who are overweight and those who wear shoes with inadequate support have an increased risk of plantar fasciitis.", channel_id: channel5.id})
video7 = Video.create!({title: "Knife Skill is not about How Fast You can chop.", description: "Knife skill comes from the right mechanism and being able to use the knife properly.", channel_id: channel5.id})
video8 = Video.create!({title: "How to Sharpen an Usuba", description: "There is a different sharpening mechanism when it comes to single edged knives. ", channel_id: channel5.id})
video9 = Video.create!({title: "Did You Know that 99.9% of Truffle Oils are Fake?", description: "Truffle oil is made out of synthetic compound made from labs. Essentially all truffle oils are never made with actual truffles. I will explain why.", channel_id: channel5.id})
video10 = Video.create!({title: "Korean Galbi made with Oxtail", description: "Simple recipe about Korean Galbi made with oxtail", channel_id: channel5.id})
video11 = Video.create!({title: "Who is Amiyo?", description: "A story about me, and my adventures.", channel_id: channel5.id})
video12 = Video.create!({title: "What Knife Should I Get?", description: "The most question I get is about what knife I should get for the kitchen. I explain the knives I currently hold, and explain what my suggestion to you is.", channel_id: channel5.id})
video13 = Video.create!({title: "Theory Behind Sharpening Knives", description: "This is a theory  I invented  about the science behind sharping knives based on the basic principles of triangle learned from any geometry class.", channel_id: channel5.id})



video1.video.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/%E1%84%80%E1%85%A9%E1%84%80%E1%85%B5+%E1%84%80%E1%85%AE%E1%86%B8%E1%84%80%E1%85%B5+%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC.mp4'), filename: 'how_to_cook_a_steak.avi')
video1.thumbnail.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/Screen+Shot+2019-05-08+at+12.39.19+PM.png'), filename: 'how_to_cook_a_steak_thumbnail.jpg')
video2.video.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/mp4+(1)'), filename: 'seasoning.avi')
video2.thumbnail.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/Screen+Shot+2019-05-08+at+11.58.35+PM.png'), filename: 'seasoning.jpg')
video3.video.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/L1000923.MP4'), filename: 'luffydinner.avi')
video3.thumbnail.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/Screen+Shot+2019-05-08+at+11.16.01+AM.png'), filename: 'luffydinner.png')
video4.video.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/mp4'), filename: 'castiron.mp4')
video4.thumbnail.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/Screen+Shot+2019-05-08+at+11.54.35+PM.png'), filename: 'castiron.jpg')
video5.video.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/1000.mp4'), filename: '10k.mp4')
video5.thumbnail.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/Screen+Shot+2019-05-09+at+12.03.18+AM.png'), filename: '10k.jpg')

video6.video.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/mp4+(6)'), filename: 'plantar.avi')
video6.thumbnail.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/Screen+Shot+2019-05-09+at+3.43.01+PM.png'), filename: 'plantar.jpg')

video7.video.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/mp4+(4)'), filename: 'knifeskill.avi')
video7.thumbnail.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/Screen+Shot+2019-05-09+at+3.42.50+PM.png'), filename: 'knifeskill.jpg')

video8.video.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/mp4+(3)'), filename: 'usuba.avi')
video8.thumbnail.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/Screen+Shot+2019-05-09+at+3.42.38+PM.png'), filename: 'usuba.jpg')

video9.video.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/mp4+(2)'), filename: 'truffle.avi')
video9.thumbnail.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/Screen+Shot+2019-05-09+at+3.42.22+PM.png'), filename: 'truffle.jpg')

video10.video.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/mp4+(1)'), filename: 'galbi.avi')
video10.thumbnail.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/Screen+Shot+2019-05-09+at+3.42.12+PM.png'), filename: 'galbi.jpg')

video11.video.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/mp4'), filename: 'amiyo.avi')
video11.thumbnail.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/Screen+Shot+2019-05-09+at+3.42.00+PM.png'), filename: 'amiyo.jpg')

video12.video.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/Sequence1+(1).mp4'), filename: 'whatknife.avi')
video12.thumbnail.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/Screen+Shot+2019-05-09+at+3.41.47+PM.png'), filename: 'whatknife.jpg')

video13.video.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/Sequence1.mp4'), filename: 'theory.avi')
video13.thumbnail.attach(io: open('https://s3-us-west-1.amazonaws.com/yourtube-raphael-prod/Screen+Shot+2019-05-09+at+3.41.35+PM.png'), filename: 'theory.jpg')