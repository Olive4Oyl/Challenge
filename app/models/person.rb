class Person < ApplicationRecord
	validates :name, presence: true
	validates :favoriteCity, presence: true

	scope :oldest, -> { order("People.created_at ASC") }

end
