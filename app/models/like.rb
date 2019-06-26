# == Schema Information
#
# Table name: likes
#
#  id            :bigint(8)        not null, primary key
#  liked         :boolean          not null
#  likeable_type :string
#  likeable_id   :bigint(8)
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ApplicationRecord

    validates_inclusion_of :liked, in: [true, false]
    validates :user_id, :uniqueness => { :scope => [:likeable_type, :likeable_id] }
    validates :likeable_type, :likeable_id, :presence => true

    belongs_to :likeable, polymorphic: true
    belongs_to :user

end
