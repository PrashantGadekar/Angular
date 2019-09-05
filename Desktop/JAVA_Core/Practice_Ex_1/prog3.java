import java.util.*;
//import java.util.Locale;
import java.lang.*;

public class prog3{

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		String word = input.nextLine();
		word = word.toLowerCase();
		//System.out.println(word.charAt(3) + "  " + word.length());
		int len = word.length();
		int i,k=0;
		for(i=0; i<len; i++){
			if ((((int)word.charAt(i))>=97) && (((int)word.charAt(i))<=122)) {
                 
			} else {
				k =1;
			}
            
   		}

   		if(k==1){
   			System.out.println("Error only alphabets allowed");
   		}else if (k==0) {
   			for(i=0; i<len; i++){
   				if(((word.charAt(i)) == 'a') || ((word.charAt(i)) == 'e')  || ((word.charAt(i)) == 'i') || ((word.charAt(i)) == 'o') || ((word.charAt(i)) == 'u')){
   					System.out.print(" Vowel ");
   				}
   				else{
   					System.out.print(" Consonent ");
   				}
   			}
   		}
	}

	
}