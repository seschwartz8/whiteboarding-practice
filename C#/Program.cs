using System;
using System.Collections.Generic;

public class Program
{

  public static double sumAverage(int[] arr1, int[] arr2)
  {
    int sum = 0;
    int totalLength = arr1.Length + arr2.Length;
    foreach (int num in arr1)
    {
      sum += num;
    }
    foreach (int num in arr2)
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
    double result = sumAverage(arr1, arr2);
    Console.WriteLine(result);
  }
}