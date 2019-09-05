import java.util.*;
import java.lang.*;

public class prog2{

public static void main(String[] args) {
	Scanner input =new Scanner(System.in);
	int n = input.nextInt();
	if(((n>=20)&&(n<=30))&&((n%2)!=0)){
		System.out.println("Tom");
	} else if (((n>=20)&&(n<=30))&&((n%2)==0)){
          System.out.println("Jerry");
	}
}
}