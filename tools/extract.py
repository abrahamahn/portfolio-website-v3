import os
from pathlib import Path

def is_code_file(file_path):
    """Check if the file is a code file based on its extension."""
    code_extensions = {
        '.js', '.jsx', '.ts', '.tsx', '.py', '.java', '.cpp', '.c', '.h', '.hpp',
        '.cs', '.go', '.rb', '.php', '.swift', '.kt', '.rs', '.m', '.scala',
        '.html', '.css', '.scss', '.sass', '.less', '.json', '.xml', '.md'
    }
    return Path(file_path).suffix.lower() in code_extensions

def extract_code_to_file(src_dir, output_file):
    """
    Extract all code files from src_dir to a single output file.
    
    Args:
        src_dir (str): Source directory containing code files
        output_file (str): Output file path where all code will be written
    """
    with open(output_file, 'w', encoding='utf-8') as out_file:
        # Walk through the source directory
        for root, _, files in os.walk(src_dir):
            for file in files:
                file_path = os.path.join(root, file)
                if is_code_file(file_path):
                    # Write file path as header
                    rel_path = os.path.relpath(file_path, src_dir)
                    out_file.write(f"\n{'='*80}\n")
                    out_file.write(f"File: {rel_path}\n")
                    out_file.write(f"{'='*80}\n\n")
                    
                    # Read and write file content
                    try:
                        with open(file_path, 'r', encoding='utf-8') as in_file:
                            content = in_file.read()
                            out_file.write(content)
                            out_file.write("\n\n")  # Add spacing between files
                    except UnicodeDecodeError:
                        print(f"Warning: Could not read {file_path} due to encoding issues")
                    except Exception as e:
                        print(f"Error processing {file_path}: {str(e)}")

def main():
    # Define source directory and output file
    src_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'src')
    output_file = os.path.join(os.path.dirname(__file__), 'extracted_code.txt')
    
    print(f"Extracting code files from {src_dir} to {output_file}")
    extract_code_to_file(src_dir, output_file)
    print("Extraction complete!")

if __name__ == "__main__":
    main() 