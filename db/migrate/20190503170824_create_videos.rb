class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.text :description
      t.integer :channel_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :videos, :title
    add_index :videos, :channel_id
    add_index :videos, :url, unique: true
    add_index :videos, :user_id
  end
end
