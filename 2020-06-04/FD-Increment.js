var count = parseInt(fd_data._2__for_each.item.overdue_count, 10);
if (!count) {
    count = 0;
}
++count;
return count;
