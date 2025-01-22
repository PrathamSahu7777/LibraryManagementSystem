INSERT INTO authors (name, bio) 
VALUES 
('J.K. Rowling', 'British author of the Harry Potter series.'),
('George R.R. Martin', 'Author of A Song of Ice and Fire series.'),
('Agatha Christie', 'English writer known for detective novels.'),
('Mark Twain', 'American author of The Adventures of Tom Sawyer.'),
('Rabindranath Tagore', 'Indian poet, philosopher, and Nobel laureate.'),
('Chetan Bhagat', 'Indian author of popular fiction novels like 2 States and The 3 Mistakes of My Life.'),
('R.K. Narayan', 'Indian novelist, best known for his fictional works set in the town of Malgudi.'),
('Arundhati Roy', 'Indian author and activist, famous for The God of Small Things.'),
('Ruskin Bond', 'Indian author of children’s books and fiction, known for his works set in the Himalayas.'),
('Khaled Hosseini', 'Afghan-American author, known for The Kite Runner.');


INSERT INTO books (title, genre, availability, author_id) 
VALUES 
('Harry Potter and the Sorcerer\'s Stone', 'Fantasy', 1, 1),
('A Game of Thrones', 'Fantasy', 1, 2),
('Murder on the Orient Express', 'Mystery', 1, 3),
('The Adventures of Tom Sawyer', 'Adventure', 1, 4),
('Gitanjali', 'Poetry', 1, 5),
('Five Point Someone', 'Fiction', 1, 6),
('Malgudi Days', 'Fiction', 1, 7),
('The God of Small Things', 'Drama', 1, 8),
('The Blue Umbrella', 'Children\'s Fiction', 1, 9),
('The Kite Runner', 'Drama', 1, 10);

INSERT INTO members (name, contact_info) 
VALUES 
('Alice Johnson', 'alice.johnson@email.com'),
('Bob Smith', 'bob.smith@email.com'),
('Priya Kumar', 'priya.kumar@email.com'),
('Rajesh Singh', 'rajesh.singh@email.com'),
('Sita Devi', 'sita.devi@email.com'),
('John Doe', 'john.doe@email.com'),
('Maria Garcia', 'maria.garcia@email.com'),
('Vikram Patel', 'vikram.patel@email.com'),
('Nina Williams', 'nina.williams@email.com'),
('Ravi Sharma', 'ravi.sharma@email.com');


INSERT INTO borrow_history (borrow_date, deadline, return_status, book_id, member_id) 
VALUES   
('2025-01-20', '2025-01-30', 0, 3, 3),  
('2025-02-01', '2025-02-10', 1, 4, 4),  
('2025-02-05', '2025-02-15', 0, 5, 5),  
('2025-02-10', '2025-02-20', 0, 6, 6),  
('2025-02-12', '2025-02-25', 1, 7, 7),  
('2025-01-05', '2025-01-15', 0, 8, 8),  
('2025-01-20', '2025-01-30', 0, 9, 9),  
('2025-01-25', '2025-02-05', 1, 10, 10);