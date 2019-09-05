import java.util.*;
import java.lang.*;

public class Ex1_1 {

public static void main(String[] args) {
	      int num, revnum;
          Scanner input = new Scanner(System.in);
          System.out.println("Enter the number");
          num = input.nextInt();
          int k =num, count = 1;
          while(k/10!=0){
            k=k/10;
          	count++;
          }
          System.out.println(count);
          //int[]	arr = new int[];
          k=num;
          int[] arr = new int[count];
          for(int i=0;i<count;i++){
			arr[i] = k%10;
			k=k/10;
		//	System.out.println(arr[i]);
		}
         int p = 0;
		for(int i=0;i<count;i++){
		  	if(arr[i] != arr[count-1-i]){
		  		p=1;
		  	}
		 }

		 int sum=0;
	    for(int i=0;i<count;i++){
		  if(arr[i]%2 == 0){
		  	sum = sum + arr[i];
		  }
	    }

		if(p==0){
             for (int i=0;i<count ;i++ ) {
             	System.out.print(arr[i]);
             }
			System.out.println(" is a palindrome and sum of even digits is " + sum);
		} else if (p==1) {
			for (int i=count-1;i>=0 ;i-- ) {
             	System.out.print(arr[i]);
             }
			System.out.println(" is not a plaindrome");
		}

		
	    
		//	System.out.println(arr[i]);
		
}



}