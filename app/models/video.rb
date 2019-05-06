class Video < ApplicationRecord
    validates :title, presence: true

    
    has_one_attached :video

    belongs_to :channel

    has_one :user, 
    through: :channel, 
    source: :user

end