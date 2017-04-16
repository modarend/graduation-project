# 这里主要是填写用户信息
SET NAMES UTF8;
USE bookWeb;
INSERT INTO orderClass VALUES(
    130102010145,
    '陈三',
    '123456789012345678',
    '123456789',
    13156786666,
    false,
    ''
);
INSERT INTO orderClass VALUES(
    130102010123,
    '赵四',
    '123456789012345668',
    '123456789',
    13156785555,
    false,
    ''
);
INSERT INTO orderClass VALUES(
    130102010160,
    '王五',
    '123456789012345678',
    '123456789',
    13156788888,
    false,
    ''
);

INSERT INTO orderClass VALUES(
    130102010153,
    '徐志成',
    '123456789012345678',
    '123456789',
    13156788888,
    true,
    ''
);

# 此处查看添加的数据是否成功
SELECT * FROM orderClass;