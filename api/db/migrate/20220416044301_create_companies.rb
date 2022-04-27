class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :website
      t.integer :address

      t.timestamps
    end
  end
end
