int removeDuplicates(int *nums, int numsSize)
{
    int i = 0;
    int k = 1;

    if (numsSize <= 1)
        return numsSize;

    while (i < numsSize - 1)
    {
        if (nums[i] != nums[i + 1])
        {
            nums[k] = nums[i + 1];
            k++;
        }
        i++;
    }

    return k;
}