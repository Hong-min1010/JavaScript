function solution(num_list) {
    let length = num_list.length;
    if(num_list[length - 1] > num_list[length - 2]) {
        num_list.push(num_list[length - 1] - num_list[length - 2]);
    } else num_list.push(num_list[length-1] * 2);
    return num_list;
}