class Video < ApplicationRecord
    validates :title, :channel_id, :user_id, presence: true
    validates :url, presence: true, uniqueness: true

    
    has_one_attached :video

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end
