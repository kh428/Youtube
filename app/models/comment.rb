# == Schema Information
#
# Table name: comments
#
#  id                :bigint(8)        not null, primary key
#  body              :text             not null
#  author_id         :integer          not null
#  video_id          :integer          not null
#  parent_comment_id :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Comment < ApplicationRecord

    validates :body, presence: true

    belongs_to :author,
        class_name: :User,
        primary_key: :id,
        foreign_key: :author_id

    belongs_to :video

    belongs_to :parent_comment,
        class_name: :Comment,
        primary_key: :id,
        foreign_key: :parent_comment_id,
        optional: true

    has_many :replies, dependent: :destroy,
        class_name: :Comment,
        primary_key: :id,
        foreign_key: :parent_comment_id

    has_many :likes, as: :likeable, dependent: :destroy

end
