using System;
using System.Collections.Generic;

public class Program
{

  public static double sumAverage(int[][] arr)
  {
    List<int> combinedList = new List<int>();
    foreach (int[] intArray in arr)
    {
      combinedList.AddRange(intArray);
    }
    int[] combinedArr = combinedList.ToArray();
    int sum = 0;
    int totalLength = combinedArr.Length;
    foreach (int num in combinedArr)
    {
      sum += num;
    }
    double rawAverage = (double) sum / totalLength;
    double average = Math.Round(rawAverage, MidpointRounding.AwayFromZero);
    return average;
  }

  public static void Main()
  {
    int[] arr1 = { 3 };
    int[] arr2 = { 2 };
    int[][] arr = { arr1, arr2 };
    double result = sumAverage(arr);
    Console.WriteLine(result);
  }
}