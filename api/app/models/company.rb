class Company < ApplicationRecord
  validates :name,presence: true
  validates :website,presence: true
  validates :address,presence: true
end