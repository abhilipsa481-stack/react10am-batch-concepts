1 //Programm to read and write array elements...........

package ARRAY;
import java.util.Scanner;
public class Test
{
public static void main(String[] args)
{
Scanner sc=new Scanner(System.in); // USING SCANNER CLASS
System.out.println("Enter the size of an array");
int sz=sc.nextInt();
int x[]=new int[sz];
System.out.println("Enter Array elements");
for(int i=0;i<sz;i++)
{
	x[i]=sc.nextInt();
}
System.out.println("Printing the elements");
for(int i=0;i<sz;i++)
{
	System.out.println(x[i]);
}}
}

2//Programm to calculate sum of element present in an array.........


package ARRAY;

public class Sumofelements
{
	public static void main(String[]args)
	{
		int[] x= {10,20,30,40};
		m1(x);
	}
	public static void m1(int[]x)
	{
		int sum=0;
		for(int i=0;i<x.length;i++)
		{
			sum=sum+x[i];
		}
		System.out.println("Sum of element present in array"+ sum);
	}

}

3//Program to calculate sum of even and odd elements of an array...........

package ARRAY;

public class EvenOdd 
{
	public static void main(String[]args)
	{
		int[]x= {11,12,13,14,15};
		m1(x);
	}
	public static void m1(int[]x)
	{
		int Sumeven=0;
		int Sumodd=0;
		for(int i=0;i<x.length;i++)
		{
			if(x[i]%2==0)
				Sumeven= Sumeven+x[i];
			else
				Sumodd=Sumodd+x[i];
			}
		System.out.println("sum of the even elements in an array"+ Sumeven); 
		System.out.println("sum of the odd elements in an array"+ Sumodd); 	
	}

}

4//Program to calculate the sum of +ve and -ve elements of an array.........

package ARRAY;

public class PositiveNegative
{
	public static void main(String[]args)
	{
	int[]x= {11,-12,13,-14};
	int Psum=0;
	int Nsum=0;
	{
		for(int i:x)
		{
			if(i>=0)
				Psum=Psum+i;
			else
				Nsum=Nsum+i;
		}
	}
	System.out.println("sum of positive elements="+ Psum);
	System.out.println("sum of negative elements="+ Nsum);
	
	}

}

5//Program to calculate the sum of prime numbers in an array.............

class A
{
    public static void main(String[] args)
    {
        int[] x = {5, 7, 4, 8, 11};
        m1(x);
    }

    public static void m1(int[] x)
    {
        int sum = 0;

        for (int i = 0; i < x.length; i++)
        {
            int count = 0;

            for (int j = 1; j <= x[i]; j++)
            {
                if (x[i] % j == 0)
                {
                    count++;
                }
            }

            if (count == 2)
            {
                sum = sum + x[i];
            }
        }

        System.out.println("The sum of prime no: " + sum);
    }
}

6//WAP TO PRINT SUM OF FACTORIAL OF ELEMENTS IN ARRAY...........

package ARRAY;
public class FactorialSum
{
	public static void main(String[]args)
	{
int[] arr= {3,4,5};
int sum=0;

for(int i=0;i<arr.length;i++)
{
    int fact=1;
    for(int j=1;j<=arr[i];j++)
    {
        fact=fact*j;
    }
    sum=sum+fact;
}
System.out.println("sum of factorials="+sum);
}}

7//WAP TO FIND THE MINIMUNM AND MAXIMUM ELEMENTS IN AN ARRAY.........

package ARRAY;

public class MaxMin 
{
	public static void main(String[]args)
	{
		int[]x= {2,5,8,9};
		int max=x[0];
		int min=x[0];
		for(int i=1;i<x.length;i++)
		{
			if (max<x[i])
			{
				max=x[i];
			}
			if(min>x[i])
			{
				min=x[i];
			}
		}
		System.out.println("the max element"+ max);
		System.out.println("the min element"+ min);
	}

}

8//WAP TO REPLACE OLD ELEMENT WITH NEW ELEMENT.......

//Version 1: Update all occurance
package ARRAY;
import java.util.Scanner;
public class Replace 
{
	public static void main(String[]args)
	{
		int[]x= {10,20,30,20};                                                                                                 
		m1(x);
	}
	public static void m1(int[]x)
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("ENTER OLD ELEMENT");
		int old=sc.nextInt();
		System.out.println("ENTER NEW ELE0ENT");
		int newe=sc.nextInt();
		for(int i=0;i<x.length;i++)
		{
			if(x[i]==old)
			{
				x[i]=newe;
			}
		}
		System.out.println("AFTER UPDATION");
		for(int i:x)
		{
			System.out.println(i);
		}
	}

}

//Version 2: Update only first occurance
package ARRAY;
import java.util.Scanner;
public class Replace 
{
	public static void main(String[]args)
	{
		int[]x= {10,20,30,20};                                                                                                 
		m1(x);
	}
	public static void m1(int[]x)
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("ENTER OLD ELEMENT");
		int old=sc.nextInt();
		System.out.println("ENTER NEW ELE0ENT");
		int newe=sc.nextInt();
		for(int i=0;i<x.length;i++)
		{
			if(x[i]==old)
			{
				x[i]=newe;
				break;
			}
		}
		System.out.println("AFTER UPDATION");
		for(int i:x)
		{
			System.out.println(i);
		}
	}

}

//Version 3: Update only second occurance

package ARRAY;
import java.util.Scanner;
public class Replace 
{
	public static void main(String[]args)
	{
		int[]x= {10,20,30,20};                                                                                                 
		m1(x);
	}
	public static void m1(int[]x)
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("ENTER OLD ELEMENT");
		int old=sc.nextInt();
		System.out.println("ENTER NEW ELEMENT");
		int newe=sc.nextInt();
		int count=0;
		for(int i=0;i<x.length;i++)
		{
			if(x[i]==old)
			{
				count++;
				if(count==2)
				{
				x[i]=newe;
			}
				}
		}
		System.out.println("AFTER UPDATION");
		for(int i:x)
		{
			System.out.println(i);
		}
	}

}
//Version 4: Update last occurance
package ARRAY;
import java.util.Scanner;
public class Replace 
{
	public static void main(String[]args)
	{
		int[]x= {10,20,30,20,50,90,20};                                                                                                 
		m1(x);
	}
	public static void m1(int[]x)
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("ENTER OLD ELEMENT");
		int old=sc.nextInt();
		System.out.println("ENTER NEW ELEMENT");
		int newe=sc.nextInt();
		int count=0;
		for(int i=x.length-1;i>=0;i--)
		{
			if(x[i]==old)
			{
				x[i]=newe;
				break;
			}		
		}
		System.out.println("AFTER UPDATION");
		for(int i:x)
		{
			System.out.println(i);
		}
	}

}
9//WAP TO FIND THE SECOND LARGEST ELEMENT........
package ARRAY;

public class SecondLargest
{
	public static void main(String[]args)
	{
		int[]x= {2,4,6,5};
		int fl=x[0];
		for(int i=1;i<x.length;i++)
		{
			if(x[i]>fl)
			{
				fl=x[i];
			}
		}
		int sfl=x[0];
		for(int i=1;i<x.length;i++)
		{
			
			 if(x[i]>sfl && x[i] !=fl)
			{
				sfl=x[i];
			}
		}
		System.out.println("FIRST LARGEST="+fl);
		System.out.println("SECOND LARGEST="+sfl);
	}

}
10//WAP TO REPLACE GIVEN LOCATION WITH NEW ELEMENT..................

//Without using scanner class
package ARRAY;

public class LocationReplace
{
public static void main(String []args)
{
	int []x= {2,3,4,5};
	int loc=1;
	int newValue=5555;
	if (loc>=0 && loc<x.length)
	{
		x[loc]=newValue;
	}
	for(int value:x)
	System.out.println(value);
}
}
//Using Scanner class

package ARRAY;

import java.util.Scanner;

public class LocationReplace
{
public static void main(String []args)
{
	Scanner sc=new Scanner(System.in);
int[]x= {2,3,4,5};
System.out.println("ENTER LOCATION:");
int loc=sc.nextInt();
System.out.println("ENTER NEW VALUE:");
int newValue=sc.nextInt();
if(loc>=0 && loc<x.length)
{
	x[loc]=newValue;
}
	System.out.println("AFTER REPLACE:");
	for(int value:x)
	{
		System.out.println(value+"");
	}
}
}
11//WAP TO COPY ALL THE ELEMENT OF AN ARRAY AND STORE IT INSIDE ANOTHER ARRAY.............
package ARRAY;
import java.util.Scanner;
public class CopyElement
{
	    public static void main(String[] args) {

	        Scanner sc = new Scanner(System.in);

	        System.out.println("Enter the size of the 1st array: ");
	        int size1 = sc.nextInt();
	        int[] x = new int[size1];

	        System.out.println("Enter the size of the 2nd array: ");
	        int size2 = sc.nextInt();
	        int[] y = new int[size2];

	        System.out.println("Enter the elements into 1st array: ");
	        for (int i = 0; i < size1; i++) 
	        {
	            x[i] = sc.nextInt();
	        }

	        System.out.println("The elements of 1st array are:");
	        for (int i = 0; i < size1; i++)
	        {
	            System.out.println(x[i]);
	        }
	        

	        System.out.println("Copy successful!");

	        System.out.println("The elements of 2nd array are:");
	        for (int i = 0; i < size1; i++)
{
	        	y[i]=x[i];
	            System.out.println(y[i]);
	        }
	    }
	}

12//WAP TO SORT THE ARRAY IN ASCENDING ORDER.........
package ARRAY;

public class Ascending
{
public static void main(String []args)
{
	int[]x= {1,3,2,5,4};
	for(int i=0;i<=x.length;i++)
	{
		for(int j=i+1;j<x.length;j++)
		{
			if(x[i]>x[j])
			{
				 int temp=x[i];
				x[i]=x[j];
				x[j]=temp;
			}
		}
	}
	System.out.println("AFTER SORTING");
	System.out.println("---------------");
	for(int i=0;i<x.length;i++)
	{
		System.out.println(x[i]);
	}
}
}

13//WAP TO SORT THE ARRAY IN DESCENDING ORDER.............
package ARRAY;

public class Descending
{
public static void main(String[]args)
{
	int[]x= {1,3,2,5,4};
	for(int i=0;i<(x.length)-1;i++)
	{
		for(int j=i+1;j<x.length;j++)
		{
			if(x[j]>x[i])
			{
				 int temp=x[j];
				x[j]=x[i];
				x[i]=temp;
			}
		}
	}
	System.out.println("AFTER SORTING");
	System.out.println("---------------");
	for(int i=0;i<x.length;i++)
	{
		System.out.println(x[i]);
	}
	}
}
14//WAP TO SORT THE FIRST HALF LENGTH OF ARRAY...............

package ARRAY;

import java.util.Arrays;

public class FirstHalf
{
public static void main(String[]args)
{
	int[] arr = {10,25,2,15,7,3};
	sort(arr);
}
public static void sort(int[]x)
{
	Arrays.sort(x,0,x.length/2);
	System.out.println("AFTER SORTING");
	System.out.println("-------------------");
	for(int i=0;i<x.length;i++)
	{
		System.out.println(x[i]);
	}
}
}
15//WAP TO SORT THE SECOND HALF LENGTH OF ARRAY....................

package ARRAY;

import java.util.Arrays;

public class SecondHalf 
{
public static void main(String[]args)
{
	int[]arr= {10,25,2,15,7,3};
	sort(arr);
}
public static void sort(int[]x)
{
	Arrays.sort(x,x.length/2,x.length);
	System.out.println("AFTER SORTING");
	System.out.println("_______________");
	for(int i=0;i<x.length;i++)
	{
		System.out.println(x[i]);
	}
}
}

16//IMPLEMENT A PROGRAM TO SEARCH FOR AN ELEMENT IN AN ARRAY............
//Linear Search.........

package ARRAY;

public class LinearSearch
{
public static void main(String[]args)
{
	int[]arr= {10,25,2,15,7,3};
	linearsearch(arr);
}
public static void linearsearch(int[]x)
{
	int key=15;
	int index=-1;
	for(int i=0;i<x.length;i++)
	{
	if(x[i]==key)
	{
		index=i;
		break;
	}
	}
	System.out.println(index);
}
}
17//BINARY SERCH...........
package ARRAY;

public class BinarySearch
{
public static void main(String[]args)
{
	int []arr= {10,20,30,40,50};
	int target=40;
	int index=binarysearch(arr,target);
	if(index==-1)
	{
		System.out.println("NOT FOUND");
	}
	else
	{
		System.out.println("FOUND IN INDEX:"+index);
	}
}
public static int binarysearch(int arr[],int key)
{
	int low=0,high=arr.length-1,mid;
	while(low<=high)
	{
		mid=(low+high)/2;
		if(arr[mid]==key)
		{
			return mid;
		}
		else if(arr[mid]<key)
		{
			low=mid+1;
		}
		else
		{
			high=mid-1;
		}
	}
	return -1;
}
}
18// EQUALITY OF TWO ARRAY..................

package ARRAY;

public class EqualityArray
{
    public static void main(String[] args)
    {
        int[] x = {10, 20, 30};
        int[] y = {10, 20, 30};

        System.out.println(EqualityArray.m1(x, y));
    }

    static boolean m1(int[] a, int[] b)
    {
        
        if (a.length != b.length)
            return false;

        
        for (int i = 0; i < a.length; i++)
        {
            if (a[i] != b[i])
                return false;
        }

 
        return true;
    }
}

//CONTENT CHECK..........

package ARRAY;

import java.util.Arrays;

public class ContentCheck
{
public static void main(String[]args)
{
	 int[] x = {10, 20, 30};
     int[] y = {10, 20, 30, 40};

     System.out.println(EqualityArray.m1(x, y));
}
static void m1(int[]a , int[]b)
{
	Arrays.sort(a);
	Arrays.sort(b);
System.out.println(Arrays.equals(a,b));
}
}

19//INSERTION OF AN ELEMENT IN AN ARRAY.............
//Case 1- Last index..........
 package ARRAY;

import java.util.Arrays;

public class InsertAtLast 
{
	public static void main(String[]args)
	{
		int[]x= {20,10,30};
		int ele=111;
		InsertAtLast .m1(x,ele);
	}
	public static void m1(int[]a,int ele)
	{
		int[]x=new int[a.length +1];
		for(int i=0;i<a.length;i++)
		{
			x[i]=a[i];
		}
		x[a.length]= ele;
		{
		System.out.println(Arrays.toString(x));
	}

}
}
//Case 2- First Index...............
package ARRAY;

import java.util.Arrays;

public class InsertAtFirst 
{
public static void main(String []args)
{
	int[]x= {20,10,30};
	int ele=111;
	InsertAtFirst.m1(x,ele);
}
public static void m1(int[]a,int ele)
{
	int i,b[]=new int[a.length +1];
	b[0]=ele;
	for(i=0;i<a.length;i++)
	{
		b[i+1]=a[i];
	}
	System.out.println(Arrays.toString(b));
}
}
//Case 3- Insertion at Specific Index............
package ARRAY;

public class InsertAtSpecific
{
public static void main(String[] args)
{
int[]a= {10,20,30,40};
int[]b= new int[a.length +1];
int ele=200;
int index=2;
int j=0;
for(int i=0;i<b.length;i++)
{
	if(i==index)
	{
		b[i]=ele;
	}
	else
	{
		b[i]=a[j];
		j++;
	}
}
for(int i:b)
{
	System.out.println(i);
}
}
}


