class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :author_id, null: false, index: true
      t.integer :video_id, null: false, index: true
      t.integer :parent_comment_id, index: true 
      t.timestamps
    end
  end
end
