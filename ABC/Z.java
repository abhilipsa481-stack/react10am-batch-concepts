public class FactorialSum
{
public static void main(System[]args)
{
	int[]x= {3,4,5};
	int sum=0;
for(int i=0;i<x.length;i++)
{
	int fact=1;
	for(int j=x[i];j>0;j++)
	{
		fact=fact*j;
	}
	sum=sum+fact;
}
System.out.println("the sum is="+ sum);
}
}
