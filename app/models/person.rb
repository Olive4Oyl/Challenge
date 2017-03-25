class Person < ApplicationRecord
	validates :name, presence: true
	validates :favoriteCity, presence: true
end
