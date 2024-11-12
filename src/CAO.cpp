#include <iostream>
#include <cstdlib>  // For rand(), srand(), atoi()
#include <vector>   // For dynamic array of strings
#include <fstream>
using namespace std;


// Function to generate a random binary string of length L
string generate_random_binary_string(int L) {
   string binary_string;
   for (int i = 0; i < L; i++) {
       binary_string += (rand() % 2) ? '1' : '0'; // Append '0' or '1' randomly
   }
   return binary_string;
}


// Function to calculate Hamming distance between two binary strings
int hamming_distance(const string &str1, const string &str2) {
   int distance = 0;
   for (size_t i = 0; i < str1.length(); i++) {
       if (str1[i] != str2[i]) {
           distance++;
       }
   }
   return distance;
}


int main(int argc, char* argv[]){


   int N, L, s;
   cout << "N=";
   cin >> N;
   cout << "L=";
   cin >> L;
   cout << "s=";
   cin >> s;




    srand(s); // Seed the random number generator


   vector<std::string> binary_strings(N); // Dynamically allocate memory for N binary strings


   // Generate N random binary strings of length L
   for (int i = 0; i < N; i++) {
       binary_strings[i] = generate_random_binary_string(L);
   }




   long long checksum = 0;
   long long pair_count = 0;


   // Calculate the Hamming distance for all pairs of strings
   for (int i = 0; i < N; i++) {
       for (int j = i + 1; j < N; j++) {
           int dist = hamming_distance(binary_strings[i], binary_strings[j]);
           checksum += dist;
           pair_count++;
       }
   }


   // Calculate the average Hamming distance
   double average = (pair_count > 0) ? static_cast<double>(checksum) / pair_count : 0.0;


   // Output the checksum and the average Hamming distance
   cout << "Checksum of all Hamming distances: " << checksum;
   cout << "\nAverage Hamming distance: " << average;


   return 0;
}
