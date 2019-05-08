class Channel < ApplicationRecord
    validates :name, presence: true

    belongs_to :user
    has_many :videos, dependent: :destroy
end
