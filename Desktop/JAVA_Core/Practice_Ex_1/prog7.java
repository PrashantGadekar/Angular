import java.util.*;
import java.lang.*;
import java.util.Arrays;
import java.util.Collections;

public class prog7{

	public static void main(String[] args) {
		Scanner input  = new Scanner(System.in);
		int num = input.nextInt();
		int count =1,k;
		k = num;
		while(k/10!=0){
			k=k/10;
			count++;
		}
		//System.out.println(count);
		int[] arr = new int[count];
		String str="";
		k = num;
		for(int i=0;i<count;i++){
			arr[i] = k%10;
			k=k/10;
		//	System.out.println(arr[i]);
		}
	    Arrays.sort(arr);
		System.out.print("Sorted number in non-increasing order : ");
		for(int i=count-1;i>=0;i--){
		System.out.print(arr[i]);
	    }
        int sum=0;
	    for(int i=0;i<count;i++){
		  if(arr[i]%2 == 0){
		  	sum = sum + arr[i];
		  }
	    }

	    System.out.println();
	    System.out.print("Sum of even numbers : ");
	    System.out.println(sum);
	    if(sum>15){
	    	System.out.println(" True");
	    } else{
	    	System.out.println("False");
	    }
	}
}