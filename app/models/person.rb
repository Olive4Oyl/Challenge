class Person < ApplicationRecord
	validates :name, presence: true
	validates :favoriteCity, presence: true

	scope :oldest, -> { order("People.id ASC") }

end
