int removeElement(int *nums, int numsSize, int val)
{
    int i = 0;
    int j = numsSize - 1;
    int k = numsSize;

    while (i <= j && numsSize != 0)
    {
        if (nums[i] == val && nums[j] != val)
        {
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        if (nums[i] != val)
            i++;
        if (nums[j] == val)
            j--, k--;
    }

    return k;
}