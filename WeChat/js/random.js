let names = ["李鑫", '刘黎', '潘石屹', '吴海安', '李雅静', '韩梦洁', '王安晏', '赵博超', '钟哲圣', '李沁', '张雨琪', '张雨绮', '李世民', '邓海洋', '梦琪', '王忆柳', '张惜文', '李慕青', '叶安志']
let tutor = ["刘洋"]
let IDs = ["201904134120","202005134210","201902134211"]
let stu_ID = IDs[Math.floor(Math.random() * IDs.length)];
let usr_name = names[Math.floor(Math.random() * names.length)];
$Cookie("姓名", usr_name, {});
$Cookie("姓名");
$Cookie("学号", stu_ID, {});
$Cookie("学号");

