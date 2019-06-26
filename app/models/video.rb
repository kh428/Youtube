# == Schema Information
#
# Table name: videos
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :text             not null
#  uploader_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord

    validates :title, :description, presence: true

    validate :ensure_videoUrl
    validate :ensure_thumbnailUrl

    belongs_to :uploader,
        class_name: :User,
        primary_key: :id,
        foreign_key: :uploader_id

    has_one_attached :videoUrl
    has_one_attached :thumbnailUrl

    has_many :comments, dependent: :destroy
    has_many :likes, as: :likeable, dependent: :destroy

    def ensure_videoUrl
        unless self.videoUrl.attached?
            errors[:video] << "file must be attached"
        end
    end

    def ensure_thumbnailUrl
        unless self.thumbnailUrl.attached?
            errors[:video] << "thumbnail must be attached"
        end
    end

end
