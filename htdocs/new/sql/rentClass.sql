# 这里主要是借阅管理
SET NAMES UTF8;
USE bookWeb;
INSERT INTO rentClass VALUES(
    130102010123,
    '赵四',
     111,
    '李嘉诚的正面和侧面',
    '2017-3-15',
    true,
    '2017-3-20',
    ''
);
INSERT INTO rentClass VALUES(
    130102010160,
    '王五',
     114,
    '响应式Web设计',
    '2017-3-8',
    true,
    '2017-3-15',
    ''
);
INSERT INTO rentClass VALUES(
     130102010145,
    '陈三',
     115,
    'Redis开发与运维',
    '2017-4-8',
    true,
    '2017-4-18',
    ''
);
INSERT INTO rentClass VALUES(
     130102010145,
    '陈三',
     112,
    'TensorFlow实战',
    '2017-3-18',
    true,
    '2017-3-25',
    ''
);
INSERT INTO rentClass VALUES(
    130102010160,
    '王五',
    118,
    'Python大战机器学',
    '2017-3-28',
    true,
    '2017-4-7',
    ''
);
INSERT INTO rentClass VALUES(
     130102010145,
    '陈三',
    114,
    '响应式Web设计',
    '2017-3-10',
    false,
    '2017-3-20',
    ''
);
INSERT INTO rentClass VALUES(
    130102010123,
    '赵四',
     111,
    '李嘉诚的正面和侧面',
    '2016-3-15',
    false,
    '2016-3-25',
    ''
);
INSERT INTO rentClass VALUES(
    130102010160,
    '王五',
     114,
    '响应式Web设计',
    '2016-3-8',
    false,
    '2016-3-25',
    ''
);
INSERT INTO rentClass VALUES(
     130102010145,
    '陈三',
     115,
    'Redis开发与运维',
    '2016-4-8',
    false,
    '2016-4-25',
    ''
);
INSERT INTO rentClass VALUES(
     130102010145,
    '陈三',
     112,
    'TensorFlow实战',
    '2016-3-18',
    false,
    '2016-3-25',
    ''
);
INSERT INTO rentClass VALUES(
    130102010160,
    '王五',
    118,
    'Python大战机器学',
    '2016-3-28',
    false,
    '2016-3-25',
    ''
);
INSERT INTO rentClass VALUES(
     130102010145,
    '陈三',
    114,
    '响应式Web设计',
    '2016-3-10',
    false,
    '2016-3-25',
    ''
);
# 此处查看添加的数据是否成功 
select * from rentClass;