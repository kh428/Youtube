class Video < ApplicationRecord
    validates :title, presence: true

    
    has_one_attached :video

    has_one_attached :thumbnail

    belongs_to :channel

    has_one :user, 
    through: :channel, 
    source: :user

end