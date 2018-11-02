var nums = ["8", "08", "080", "008"];

for (var i = 0; i < nums.length; i++) {
    gs.info('parseInt():' + parseInt(nums[i]));
    gs.info('parseInt(10):' + parseInt(nums[i], 10) + '\n');

}