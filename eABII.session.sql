select *
from categories;
INSERT INTO categories
VALUES (NULL, 'Boisson', NOW(), NOW());
INSERT INTO products
VALUES (
        NULL,
        'Fanta',
        70,
        90,
        'pepsi.jpg',
        1,
        NOW(),
        NOW()
    )