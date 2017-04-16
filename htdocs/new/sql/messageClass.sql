# 这里是一个留言板的功能
SET NAMES UTF8;
USE bookWeb;
INSERT INTO messageClass VALUES(
    '默默地雨',
    '男',
    '123456@qq.com',
    '真的很好用！！',
    false,
    ''
);
INSERT INTO messageClass VALUES(
    '默默地雨',
    '男',
    '123456@qq.com',
    '强烈推荐这些文章',
    false,
    ''
);
INSERT INTO messageClass VALUES(
    '默默地雨',
    '男',
    '123456@qq.com',
    '租借真的很方便',
    false,
    ''
);
INSERT INTO messageClass VALUES(
    '默默地雨',
    '男',
    '123456@qq.com',
    '每天的学一点，后期会知道好多',
    false,
    ''
);
# 此处查看留言是否插入成功
SELECT * FROM  messageClass;
