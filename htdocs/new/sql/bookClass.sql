# 这个文件主要是负责填充bookClass中的数据的
SET NAMES UTF8;
USE bookWeb;
INSERT INTO bookClass VALUES(
    111,
    '李嘉诚的正面和侧面',
    '3F哲学部35A5层',
    'http://127.0.0.1:8020/new/images/book/index2.jpg',
    10,
    3,
    10,
    '哲理、人性思考、名人故事',
    true,
    ''
);
INSERT INTO bookClass VALUES(
    112,
    'TensorFlow实战',
    '3F计算机馆35B4层',
    'http://127.0.0.1:8020/new/images/book/24188034-1_l_3.jpg',
    10,
    5,
    10,
    '用严谨的逻辑看穿计算机语言的奥妙',
    true,
    ''
);
INSERT INTO bookClass VALUES(
    113,
    'Python大战机器学',
    '3F计算机馆35A4层',
    'http://127.0.0.1:8020/new/images/book/24195827-1_l_3.jpg',
    10,
    3,
    10,
    '当下流行的一门前卫语言',
    true,
    ''
);
INSERT INTO bookClass VALUES(
    114,
    '响应式Web设计',
    '3F计算机馆35A4层',
    'http://127.0.0.1:8020/new/images/book/24178367-1_l_2.jpg',
    10,
    1,
    10,
    '移动端网站开发者必备解决方案',
    true,
    ''
);
INSERT INTO bookClass VALUES(
    115,
    'Redis开发与运维',
    '3F计算机馆37A9层',
    'http://127.0.0.1:8020/new/images/book/24195827-1_l_3.jpg',
    10,
    3,
    10,
    '当下流行的一门前卫语言',
    false,
    ''
);

INSERT INTO bookClass VALUES(
    116,
    '李嘉诚的正面和侧面',
    '3F哲学部35A5层',
    'http://127.0.0.1:8020/new/images/book/index2.jpg',
    10,
    3,
    10,
    '哲理、人性思考、名人故事',
    false,
    ''
);
INSERT INTO bookClass VALUES(
    117,
    'TensorFlow实战',
    '3F计算机馆35B4层',
    'http://127.0.0.1:8020/new/images/book/24188034-1_l_3.jpg',
    10,
    5,
    10,
    '用严谨的逻辑看穿计算机语言的奥妙',
    false,
    ''
);
INSERT INTO bookClass VALUES(
    118,
    'Python大战机器学',
    '3F计算机馆35A4层',
    'http://127.0.0.1:8020/new/images/book/24195827-1_l_3.jpg',
    10,
    3,
    10,
    '当下流行的一门前卫语言',
    false,
    ''
);
INSERT INTO bookClass VALUES(
    119,
    '响应式Web设计',
    '3F计算机馆35A4层',
    'http://127.0.0.1:8020/new/images/book/24178367-1_l_2.jpg',
    10,
    1,
    10,
    '移动端网站开发者必备解决方案',
    false,
    ''
);
INSERT INTO bookClass VALUES(
    110,
    'Redis开发与运维',
    '3F计算机馆37A9层',
    'http://127.0.0.1:8020/new/images/book/24195827-1_l_3.jpg',  
    10,
    3,
    10,
    '当下流行的一门前卫语言',
    false,
    ''
);

# 查看添加的数据是否成功
SELECT * FROM bookClass;