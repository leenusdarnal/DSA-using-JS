function tower(disks, source, Intermediate, destination) {
  if (disks === 1) {
    console.log(
      `Disk ${disks} Move from Tower ${source} to Tower ${destination}`
    );
    return;
  }

  tower(disks - 1, source, destination, Intermediate);
  console.log(
    `Disk ${disks} Move from Tower ${source} to Tower ${destination}`
  );
  tower(disks - 1, Intermediate, source, destination);
}

// Inputs
tower(3, 'A', 'B', 'C');
