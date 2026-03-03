import java.util.Arrays;

public class Firsthalf
{
public static void main(String[]args)
{
	int[]arr= {7,8,2,9};
	sort(arr);
}
public static void sort(int[]x)
{
	Arrays.sort(x,0,x.length/2);
	System.out.println("AFTER SORTINH");
	System.out.println("---------------");
	for(int i=0;i<x.length;i++);
	{
	System.out.println(x[i]);
	}
}
}
