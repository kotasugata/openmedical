puts 'Creating companies...'

# 適当なTodoを30つ作成
30.times do |i|
  Company.create(name: "Company#{i + 1}", website: "https://#{1}.com",address:i)
end

puts '...Finished!'